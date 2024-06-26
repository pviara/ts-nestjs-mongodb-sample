import { AppConfigurationModule } from './infrastructure/configuration/app-configuration.module';
import { AppConfigurationService } from './infrastructure/configuration/app-configuration.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { RouterModule } from '@nestjs/core';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [AppConfigurationModule],
            inject: [AppConfigurationService],
            useFactory: (appConfigService: AppConfigurationService) => {
                const options: MongooseModuleOptions = {
                    uri: appConfigService.connectionString,
                };
                return options;
            },
        }),
        RouterModule.register([
            {
                path: 'user',
                module: UserModule,
            },
        ]),
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
