import { RiderApplication } from './../../node_modules/.prisma/client/index.d';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { CreateRiderApplicationDto } from './dto/create-rider-application.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RiderService {
  constructor(private prisma: PrismaService) {}

async approveRiderApplication(application: any) {
  if(application.status !== 'APPROVED') {
    throw new Error('Only approved applications can be processed');
  }

  const result = await this.prisma.$transaction(async (tsx)=>{
    const user = await tsx.user.findUnique({
          where: { email: application.email },
        })
    


  })
}

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

      // if application already linked to a user and rider profile exists

      if (application.userId) {
        await tsx.user.update({
          where: { id: application.userId },
          data: {
            role: "USER",
          },
        });
      }

      const existingRiderProfile = await tsx.riderProfile.findUnique({
        where: { applicationId: application.id },
      });

      if (existingRiderProfile) {
        await tsx.riderProfile.update({
          where: {
            userId: application.userId,
          },
          data: {
            status: RiderStatus.REJECTED,
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
        regionId: createRiderApplicationDto.regionId,
        districtId: createRiderApplicationDto.districtId,
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

  async getRiderApplications() {
    return await this.prisma.riderApplication.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async updateRiderApplicationStatus(id: number, status: string) {
    const application = await this.prisma.riderApplication.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });

    if (!application) {
      throw new Error('Rider application not found');
    }

    if (status === RiderApplication.status.APPROVED) {
      return this.approveRiderApplication(application);
    }
  }
}
