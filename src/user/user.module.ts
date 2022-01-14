import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from './user.repository';
import { userSchema } from './user';

@Module({
  controllers: [],
  exports: [],
  imports: [
    MongooseModule.forFeature([{
      name: 'User', schema: userSchema
    }])
  ],
  providers: [UserRepository]
})
export class UserModule { }