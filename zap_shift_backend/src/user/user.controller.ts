/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Controller,
  Post,
  Body,
  Req,
  Res,
  Get,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';
import { response, type Request, type Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
type AuthenticatedUser = {
  id: number;
  email: string;
  name: string;
  role: string;
};

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  async register(
    @Req() request: Request,
    @Res() response: Response,
    @Body() registerData: RegisterDto,
  ): Promise<any> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const result = await this.userService.register(registerData);

      return response.status(201).json({
        message: 'User registered successfully',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        data: result,
      });
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        status: 'Error!',
        message: 'Internal Server Error!',
      });
    }
  }

  @Post('/login')
  async login(
    @Req() request: Request,
    @Res() response: Response,
    @Body() loginData: LoginDto,
  ): Promise<any> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const result = await this.userService.login(loginData);

      return response.status(200).json({
        message: 'User logged in successfully',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        data: result,
      });
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        status: 'Error!',
        message: 'Internal Server Error!',
      });
    }
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  async getCurrentUser(  @Req() request: Request,
    @Res() response: Response,): Promise<any> {
    try {
      const user = (request as Request & { user?: User }).user;
      if (!user) {
        throw new NotFoundException('User not found');
      }

      const result = await this.userService.getUserById(user.id);
      return response.status(200).json({
        message: 'User fetched successfully',
        data: result,
      });
    } catch (error) {
      console.log(error);
      response.status(500).json({
        status: 'Error!',
        message: 'Internal Server Error!',
      });
    }
  }
}
