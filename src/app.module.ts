import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigModule } from '@nestjs/config';
// console.log(process.env.MONGO_URI);
@Module({
  imports: [
    ConfigModule.forRoot(),
    // MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/jwtauth'),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
