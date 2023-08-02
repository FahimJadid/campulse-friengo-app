import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'config/config.env', // Specify the path to your .env file
    }),
      MongooseModule.forRootAsync({
        useFactory: () => ({
          uri: process.env.MONGO_URI,
        }),
      }),
      UsersModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
