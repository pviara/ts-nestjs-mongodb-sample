import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './user';

@Module({
  controllers: [],
  exports: [],
  imports: [
    MongooseModule.forFeature([{
      name: 'User', schema: userSchema
    }])
  ],
  providers: []
})
export class UserModule { }