/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { createHash, randomBytes } from 'crypto';
import { forgotPasswordEmailTemplate } from './forgot-password-email.template';
import { NotificationService } from 'src/notification/notification.service';
import { ResetPasswordDto } from './dto/reset-password.dto';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private readonly cloudinaryService: CloudinaryService,
    private readonly notificationService: NotificationService,
  ) {}

  async register(registerData: RegisterDto): Promise<any> {
    try {
      registerData.password = await bcrypt.hash(registerData.password, 10);
      const user = await this.prisma.$transaction(async (tx) => {
        const createdUser = await tx.user.create({
          data: {
            name: registerData.name,
            email: registerData.email,
            password: registerData.password,
          },
        });
        return createdUser;
      });

      return {
        token: this.jwtService.sign({
          id: user.id,
          email: registerData.email,
          role: user.role,
        }),
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      };
    } catch (error) {
      return error;
    }
  }

  async login(logindata: LoginDto): Promise<any> {
    const { email, password } = logindata;

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) {
      throw new NotFoundException('Invalid credentials');
    }

    return {
      token: this.jwtService.sign({
        id: user.id,
        email: user.email,
        role: user.role,
      }),
    };
  }

  async getUserById(userId: number): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        photoUrl: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async updateUserImage(
    userId: number,
    file: Express.Multer.File,
  ): Promise<any> {
    const isUserExist = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!isUserExist) {
      throw new NotFoundException('User not found');
    }
    if (isUserExist.photoUrl) {
      await this.cloudinaryService.deleteImage(isUserExist.photoUrl);
    }

    const data = {
      photoUrl: '',
    };

    if (file) {
      const imageUrl = await this.cloudinaryService.uploadImage(
        file,
        'user_images',
      );
      data.photoUrl = imageUrl;
    }
    const user = await this.prisma.user.update({
      where: { id: userId },
      data,
    });
    return user;
  }

  async forgotPassword(email: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { email: email.trim().toLowerCase() },
    });

    if (!user) return;

    await this.prisma.passwordResetToken.deleteMany({
      where: { userId: user.id },
    });

    const rawToken = randomBytes(32).toString('hex');
    const tokenHash = createHash('sha256').update(rawToken).digest('hex');

    const expiresAt = new Date(Date.now() + 30 * 60 * 1000); // Token expires in 30 mins

    await this.prisma.passwordResetToken.create({
      data: {
        tokenHash,
        userId: user.id,
        expiresAt,
      },
    });

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${rawToken}`;

    const html = forgotPasswordEmailTemplate({
      name: user.name,
      resetUrl,
      expiryMinutes: 30,
    });

    await this.notificationService.sendEmail({
      to: user.email,
      subject: 'ZapShift Password Reset Request',
      html,
    });
  }

  async resetPassword(data: ResetPasswordDto) {
    const { token, newPassword } = data;

    const tokenHash = createHash('sha256').update(token).digest('hex');

    const passwordResetToken = await this.prisma.passwordResetToken.findUnique({
      where: { tokenHash: tokenHash },
      include: { user: true },
    });

    if (!passwordResetToken) {
      throw new NotFoundException('Invalid or expired password reset token');
    }

    if (passwordResetToken.usedAt) {
      throw new NotFoundException(
        'This password reset token has already been used',
      );
    }

    if (passwordResetToken.expiresAt < new Date()) {
      throw new NotFoundException('Invalid or expired password reset token');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await this.prisma.$transaction(async (tsx) => {
      await tsx.user.update({
        where: { id: passwordResetToken.userId },
        data: { password: hashedPassword },
      });

      await tsx.passwordResetToken.update({
        where: { id: passwordResetToken.id },
        data: { usedAt: new Date() },
      });

      await tsx.passwordResetToken.deleteMany({
        where: {
          userId: passwordResetToken.userId,
          usedAt: null,
          id: {
            not: passwordResetToken.id,
          },
        },
      });
    });
  }
}
