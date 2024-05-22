import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigurationModule } from '@App/Config/Configuration.Module';
import { SendgridService } from './-Domain/Services/Sendgrid.Service';

@Module({
  imports: [ConfigurationModule],
  controllers: [AppController],
  providers: [SendgridService],
})
export class AppModule {}
