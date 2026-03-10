import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
interface EmailOptions {
  to: string;
  subject?: string;
  html: string;
}
@Injectable()
export class NotificationService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail({ to, subject = 'Test Subject', html }: EmailOptions) {
    await this.mailerService.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
      text: html,
    });
  }
}
