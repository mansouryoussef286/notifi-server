import { NotificationDto } from '@App/-Domain/DTOs/Notification.Dto';
import { RabbitMQService } from '@App/-Domain/Services/RabbitMQ.Service';
import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';

@Controller('notification')
export class NotificationController {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  @Post()
  async sendEmailNotification(@Body() notification: NotificationDto) {
    // Ensure connection to RabbitMQ
    // await this.rabbitMQService.connect();

    // // Create queue if it doesn't exist
    // await this.rabbitMQService.createQueue('notifications');

    // // Prepare notification message
    // const message = { notificationType: 'email', notification };

    // // Send notification message to queue
    // await this.rabbitMQService.channel.sendToQueue(
    //   'notifications',
    //   Buffer.from(JSON.stringify(message)),
    // );

    this.rabbitMQService.Send(notification);

    return { message: 'Email notification sent to queue for processing.' };
  }
}
