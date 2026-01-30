/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Role } from '@prisma/client';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PrismaService } from '../prisma/prisma.service';

interface JwtPayload {
  id: number;
  name: string;
  email: string;
  role: Role;
}
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error('JWT_SECRET is missing');
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
  }

  async validate(payload: JwtPayload) {
    const users = await this.prisma.user.findUnique({
      where: {
        id: payload.id,
        email: payload.email,
        role: payload.role,
      },
      select: {
        id: true,
        email: true,
        role: true,
        name: true,
      },
    });

    if (!users) {
      throw new UnauthorizedException('Invalid token');
    }
    return users;
  }
}
