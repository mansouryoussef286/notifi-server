import { Controller, Get } from '@nestjs/common';
import { AppConfig } from './Config/App.Config';

@Controller()
export class AppController {
  constructor(private readonly AppConfig: AppConfig) {}

  @Get()
  getHello(): string {
    return `Hello this is Notifi-Server version ${this.AppConfig.Config.Version}`;
  }
}
