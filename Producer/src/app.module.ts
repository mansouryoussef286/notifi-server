import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigurationModule } from '@App/Config/Configuration.Module';
import { NotifiModule } from './-App/Notifi/Notifi.Module';

@Module({
  imports: [ConfigurationModule, NotifiModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
