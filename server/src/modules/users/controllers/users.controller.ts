import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './../services/users.service';
import { AuthDto } from '../dtos/auth.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Post('signup')
    async signupUser(@Body() authDto: AuthDto){
        return await this.usersService.createUser(authDto);
    }
}
