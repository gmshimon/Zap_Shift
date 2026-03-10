import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { RiderModule } from './rider/rider.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [PrismaModule, UserModule, RiderModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
