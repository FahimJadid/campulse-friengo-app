import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../UsersServices/users.service';
import { AuthDto } from '../../auth/AuthDtos/auth.dto';
import { AuthService } from 'src/modules/auth/AuthServices/auth.service';


@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
        private authService: AuthService
        
        ){}

    @Post('signup')
    async signupUser(@Body() authDto: AuthDto){
        return await this.usersService.createUser(authDto);
    }

    @Post('login')
    async loginUser(@Body() authDto: AuthDto){
        return await this.authService.login(authDto);
    }
}
