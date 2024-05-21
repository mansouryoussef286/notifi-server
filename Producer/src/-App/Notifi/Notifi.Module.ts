import { Module } from '@nestjs/common';
import { NotificationController } from './Notifi.Controller';
import { ConfigurationModule } from '@App/Config/Configuration.module';
// import { DataModule } from '@App/-Data/Data.Module';
import { CommonModule } from '@App/Common/Common.Module';
import { RabbitMQService } from '@App/-Domain/Services/RabbitMQ.Service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigurationModule,
    CommonModule,
    ClientsModule.register([
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
    ]),
  ],
  controllers: [NotificationController],
  providers: [RabbitMQService],
})
export class NotifiModule {}
