/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { RiderStatus } from '@prisma/client';
import { CreateRiderApplicationDto } from './dto/create-rider-application.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotificationService } from 'src/notification/notification.service';
import {
  riderAccountCreatedEmailTemplate,
  riderRejectedEmailTemplate,
} from 'src/notification/email-template';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RiderService {
  constructor(
    private prisma: PrismaService,
    private readonly notificationService: NotificationService,
  ) {}

  // Function to approve rider application
  async approveRiderApplication(application: any, adminId: number) {
    if (application.status !== 'APPROVED') {
      throw new Error('Only approved applications can be processed');
    }

    const result = await this.prisma.$transaction(async (tsx) => {
      let user = await tsx.user.findUnique({
        where: { email: application.email },
      });

      if (!user) {
        const newPass = Math.random().toString(36).slice(-8);
        const hashedPassword = await bcrypt.hash(newPass, 10);
        user = await tsx.user.create({
          data: {
            name: application.fullName,
            email: application.email,
            password: hashedPassword,
            role: 'RIDER',
            isActive: true,
          },
        });

        // Send approval email to the applicant with login credentials
        await this.notificationService.sendEmail({
          to: application.email,
          subject: 'Your ZapShift Rider Application Has Been Approved',
          html: riderAccountCreatedEmailTemplate({
            name: application.fullName,
            email: application.email,
            temporaryPassword: newPass,
            loginUrl: 'https://app.zapshift.com/login',
          }),
        });
      } else {
        user = await tsx.user.update({
          where: { email: application.email },
          data: {
            role: 'RIDER',
            isActive: true,
          },
        });
      }

      // update the application with linked user + approved status
      const updateApplication = await tsx.riderApplication.update({
        where: {
          id: application.id,
        },
        data: {
          userId: user.id,
          approvedById: adminId,
          status: 'APPROVED',
          approvedAt: new Date(),
          rejectedAt: null,
        },
      });

      // create rider profile if not exists
      const existingRiderProfile = await tsx.riderProfile.findUnique({
        where: {
          userId: user.id,
        },
      });

      let riderProfile = existingRiderProfile;

      if (!existingRiderProfile) {
        riderProfile = await tsx.riderProfile.create({
          data: {
            userId: user.id,
            status: 'APPROVED',
          },
        });
      } else {
        riderProfile = await tsx.riderProfile.update({
          where: {
            userId: user.id,
          },
          data: {
            status: 'APPROVED',
          },
        });
      }

      return {
        message: 'Rider application approved successfully',
        data: {
          application: updateApplication,
          user,
          riderProfile,
        },
      };
    });
    return result;
  }

  // Function to reject rider application
  async rejectRiderApplication(application: any) {
    if (application.status !== 'REJECTED') {
      throw new Error('Only rejected applications can be deleted');
    }

    const result = await this.prisma.$transaction(async (tsx) => {
      const updateApplication = await tsx.riderApplication.update({
        where: { id: application.id },
        data: {
          status: 'REJECTED',
          rejectedAt: new Date(),
          approvedAt: null,
        },
      });

      // Send rejection email to the applicant
      if (application.email) {
        await this.notificationService.sendEmail({
          to: application.email,
          subject: 'Update on Your ZapShift Rider Application',
          html: riderRejectedEmailTemplate({
            name: application.fullName,
            supportEmail: 'support@zapshift.com',
          }),
        });
      }

      // if application already linked to a user and rider profile exists
      if (application.userId) {
        await tsx.user.update({
          where: { id: application.userId },
          data: {
            role: 'USER',
          },
        });
      }

      const existingRiderProfile =
        application.userId != null
          ? await tsx.riderProfile.findUnique({
              where: { userId: application.userId },
            })
          : null;

      if (existingRiderProfile && application.userId) {
        await tsx.riderProfile.update({
          where: {
            userId: application.userId,
          },
          data: {
            status: 'REJECTED',
          },
        });
      }
      return {
        message: 'Rider application rejected and profile updated successfully',
        data: updateApplication,
      };
    });
    return result;
  }

  // service function to create rider application
  async createRiderApplication(
    createRiderApplicationDto: CreateRiderApplicationDto,
  ) {
    // check the duplicate NID
    const existingNid = await this.prisma.riderApplication.findUnique({
      where: { nidNumber: createRiderApplicationDto.nidNumber },
    });
    if (existingNid) {
      throw new Error('NID number already exists');
    }

    // check the duplicate bike registration number
    const existingBikeReg = await this.prisma.riderApplication.findUnique({
      where: {
        bikeRegistrationNumber:
          createRiderApplicationDto.bikeRegistrationNumber,
      },
    });
    if (existingBikeReg) {
      throw new Error('Bike registration number already exists');
    }

    //check if the user already exists with the same email
    const existingUser = await this.prisma.user.findUnique({
      where: { email: createRiderApplicationDto.email },
    });

    const application = await this.prisma.riderApplication.create({
      data: {
        fullName: createRiderApplicationDto.fullName,
        email: createRiderApplicationDto.email,
        phone: createRiderApplicationDto.phone,
        region: createRiderApplicationDto.region,
        district: createRiderApplicationDto.district,
        nidNumber: createRiderApplicationDto.nidNumber,
        drivingLicenseNumber: createRiderApplicationDto.drivingLicenseNumber,
        bikeBrandModelYear: createRiderApplicationDto.bikeBrandModelYear,
        bikeRegistrationNumber:
          createRiderApplicationDto.bikeRegistrationNumber,
        note: createRiderApplicationDto.note,
        userId: existingUser ? existingUser.id : null,
      },
    });

    return application;
  }

  // service function to get all rider applications
  async getRiderApplications() {
    return await this.prisma.riderApplication.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // service function to update rider application status
  async updateRiderApplicationStatus(
    adminId: number,
    id: number,
    status: RiderStatus,
  ) {
    const application = await this.prisma.riderApplication.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });

    if (!application) {
      throw new Error('Rider application not found');
    }

    if (status === 'APPROVED') {
      return this.approveRiderApplication(application, adminId);
    }
    if (status === 'REJECTED') {
      return this.rejectRiderApplication(application);
    }
  }
}
