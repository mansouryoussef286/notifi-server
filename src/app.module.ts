import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigurationModule } from '@App/Config/Configuration.Module';

@Module({
  imports: [ConfigurationModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
