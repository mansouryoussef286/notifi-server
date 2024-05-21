import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Config } from '@App/Config/App.Config';
import { Transport } from '@nestjs/microservices';
/*
{
        name: 'NOTIFICATIONS_QUEUE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://crgqctsx:h-ZATwzCqkk5miNsj_JQaQnXJtqGSksc@hummingbird.rmq.cloudamqp.com/crgqctsx',
          ], // Adjust URL if RabbitMQ is on a different host/port
          queue: 'notifications', // Queue name for notifications
        },
      },
      {
        name: 'EMAILS_QUEUE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://crgqctsx:h-ZATwzCqkk5miNsj_JQaQnXJtqGSksc@hummingbird.rmq.cloudamqp.com/crgqctsx',
          ],
          queue: 'emails',
        },
      },
*/
async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://crgqctsx:h-ZATwzCqkk5miNsj_JQaQnXJtqGSksc@hummingbird.rmq.cloudamqp.com/crgqctsx',
      ],
      queue: 'notifications',
      // false = manual acknowledgement; true = automatic acknowledgment
      noAck: false,
      // Get one by one
      prefetchCount: 1,
    },
  });
  // await app.listenAsync();

  // const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const config = configService.get<Config>('Config');

  await app.listen().then(async () => {
    console.log(`ENV = ${config.Env}`);
  });
}
bootstrap();
