import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import * as amqp from 'amqplib/callback_api';

@Injectable()
export class RabbitMQService {
  // private url: string = 'amqp://localhost:5672'; // Adjust URL as needed
  private url: string =
    'amqps://crgqctsx:h-ZATwzCqkk5miNsj_JQaQnXJtqGSksc@hummingbird.rmq.cloudamqp.com/crgqctsx'; // Adjust URL as needed

  private conn: amqp.Connection | null = null;
  channel: amqp.Channel | null = null;

  constructor(
    @Inject('NOTIFICATIONS_QUEUE') private readonly client: ClientProxy,
  ) {}

  Send(data) {
    return this.client.send('notifications', data).toPromise();
  }

  // async connect(): Promise<void> {
  //   try {
  //     this.conn = await amqp.connect(this.url);
  //     this.channel = await this.conn.createChannel();
  //     console.log('Connected to RabbitMQ');
  //   } catch (error) {
  //     console.error('Error connecting to RabbitMQ:', error);
  //     throw error;
  //   }
  // }

  // async createQueue(queueName: string): Promise<void> {
  //   if (!this.channel) {
  //     throw new Error('RabbitMQ connection not established');
  //   }
  //   await this.channel.assertQueue(queueName, { durable: true });
  //   console.log(`Queue '${queueName}' created`);
  // }

  // async closeConnection(): Promise<void> {
  //   if (this.conn) {
  //     await this.conn.close();
  //     this.conn = null;
  //     this.channel = null;
  //     console.log('Disconnected from RabbitMQ');
  //   }
  // }
}
