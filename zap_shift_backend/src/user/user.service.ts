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

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private readonly cloudinaryService: CloudinaryService,
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
}
