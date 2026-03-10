/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Controller,
  Req,
  Res,
  Get,
  Post,
  Body,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { RiderService } from './rider.service';

import { response, type Request, type Response } from 'express';
import { CreateRiderApplicationDto } from './dto/create-rider-application.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Post('rider-application')
  async createRiderApplication(
    @Req() request: Request,
    @Res() response: Response,
    @Body() data: CreateRiderApplicationDto,
  ) {
    try {
      const result = await this.riderService.createRiderApplication(data);
      return response.status(201).json({
        message: 'Rider application created successfully',
        data: result,
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: 'Internal Server Error!',
      });
    }
  }

  @Get('rider-application')
  @UseGuards(AuthGuard('jwt'))
  async getRiderApplications(
    @Req() request: Request,
    @Res() response: Response,
  ) {
    try {
      const user = (request as Request & { user?: User }).user;

      if (user?.role !== 'ADMIN') {
        return response.status(403).json({
          status: 'Error!',
          message: 'Forbidden! Only admins can access this resource.',
        });
      }

      const applications = await this.riderService.getRiderApplications();
      return response.status(200).json({
        message: 'Rider applications retrieved successfully',
        data: applications,
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: 'Internal Server Error!',
      });
    }
  }

  @Patch('rider-application/:id/status')
  @UseGuards(AuthGuard('jwt'))
  async updateRiderApplicationStatus(
    @Req() request: Request,
    @Res() response: Response,
    @Body() data: { status: string },
  ) {
    try {
      const user = (request as Request & { user?: User }).user;

      if (user?.role !== 'ADMIN') {
        return response.status(403).json({
          status: 'Error!',
          message: 'Forbidden! Only admins can access this resource.',
        });
      }

      // Implement the logic to update the rider application status here
      const result = await this.riderService.updateRiderApplicationStatus(
        Number(request.params.id),
        data.status,
      );
      return response.status(200).json({
        message: 'Rider application status updated successfully',
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: 'Internal Server Error!',
      });
    }
  }
}
