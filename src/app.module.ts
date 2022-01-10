import { AppConfigurationModule } from './infrastructure/configuration/app-configuration.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [AppConfigurationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}