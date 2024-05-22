import { Controller, Get } from '@nestjs/common';
import { AppConfig } from './Config/App.Config';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { SendgridService } from './-Domain/Services/Sendgrid.Service';
import { NotificationDto } from './-Domain/DTOs/Notification.Dto';

@Controller()
export class AppController {
  constructor(
    private readonly AppConfig: AppConfig,
    private SendgridService: SendgridService,
  ) {}

  @MessagePattern('notifications')
  public async execute(
    @Payload() data: NotificationDto,
    @Ctx() context: RmqContext,
  ) {
    const channel = context.getChannelRef();
    const orginalMessage = context.getMessage();
    console.log('data', data);

    this.SendgridService.SendMail(data);

    channel.ack(orginalMessage);
  }
}
