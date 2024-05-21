import { NotificationDto } from '@App/-Domain/DTOs/Notification.Dto';
import { RabbitMQService } from '@App/-Domain/Services/RabbitMQ.Service';
import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';

@Controller('notification')
export class NotificationController {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  @Post('notification')
  async sendNotification(@Body() notification: NotificationDto) {
    this.rabbitMQService.Send(notification);
    console.log('Notification sent to queue for processing.');

    return { message: 'Notification sent to queue for processing.' };
  }

  @Post('email')
  async sendEmail(@Body() notification: NotificationDto) {
    this.rabbitMQService.SendEmail(notification);
    console.log('Email sent to queue for processing.');

    return { message: 'Email sent to queue for processing.' };
  }
}
