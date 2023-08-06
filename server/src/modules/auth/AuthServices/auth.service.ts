import { BadRequestException, Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/modules/users/UsersServices/users.service';
import { AuthDto } from '../AuthDtos/auth.dto';


@Injectable()
export class AuthService {
    constructor (
        private usersService: UsersService,
        private JwtService: JwtService
    ) {}

    async login({email, password}: AuthDto){
        try {
            const user = await this.usersService.getUserByEmail(email);
            if(!user){
                throw new BadRequestException("Invalid email/password.")
            }
            const isMatch = await compare(password, user.password);
            if(!isMatch){
                throw new BadRequestException("Invalid email/password.")
            }
            const payload = {email: user.email, id: user._id};
            return {
                success: true,
                token: await this.JwtService.signAsync(payload),
                user
            }
        } catch (error) {
            const err = error as Error
            console.log(err.message);
            throw new BadRequestException(err.message)
        }
    }
}