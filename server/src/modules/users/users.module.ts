import { Module } from '@nestjs/common';
import { UsersController } from './UsersControllers/users.controller';
import { UsersService } from './UsersServices/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/database/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '../auth/AuthServices/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, AuthService],
})
export class UsersModule {}
