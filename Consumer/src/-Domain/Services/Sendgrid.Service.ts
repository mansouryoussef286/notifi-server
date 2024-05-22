import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import * as amqp from 'amqplib/callback_api';
import { NotificationDto } from '../DTOs/Notification.Dto';

@Injectable()
export class SendgridService {
  // private url: string = 'amqp://localhost:5672'; // Adjust URL as needed
  private url: string =
    'amqps://crgqctsx:h-ZATwzCqkk5miNsj_JQaQnXJtqGSksc@hummingbird.rmq.cloudamqp.com/crgqctsx'; // Adjust URL as needed

  private conn: amqp.Connection | null = null;
  channel: amqp.Channel | null = null;

  constructor() {}

  SendMail(data: NotificationDto) {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(
      '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',
    );
    const msg = {
      to: 'mansouryoussef286@gmail.com', // Change to your recipient
      from: 'mansouryoussef286public@gmail.com', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: `<strong>${data.message}</strong>`,
    };
    sgMail
      .send(msg)
      .then((s) => {
        console.log(s);

        console.log('Email sent');
      })
      .catch((error) => {
        console.error(error.response.body.errors);
      });
  }
}
