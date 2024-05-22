import { Inject, Injectable, Logger } from '@nestjs/common';
import { NotificationDto } from '../DTOs/Notification.Dto';
import { AppConfig } from '@App/Config/App.Config';

@Injectable()
export class SendgridService {
  constructor(private AppConfig: AppConfig) {}

  SendMail(data: NotificationDto) {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(this.AppConfig.Config.SendgridApiKey);
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
