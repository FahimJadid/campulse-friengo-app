import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/database/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { AuthDto } from '../dtos/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}


    async createUser(data: AuthDto){
        try {
            const isUserFound = await this.getUserByEmail(data.email);
            if(isUserFound){
                throw new BadRequestException('User already exists')
            }
            const saltOrRounds = 10;
            const password = data.password;
            const hashedPassword = await bcrypt.hash(password, saltOrRounds);
            
            const newUser = new this.userModel({...data, hashedPassword});
            await newUser.save();
            return {
                success: true,
                message: 'User created successfully',
            }


        } catch (error) {
            const err = error as Error;            
            console.log(err.message);
            throw new BadRequestException(err.message);
        }
    }
   async getUserByEmail(email: string) {
        return await this.userModel.findOne({email}).exec()
    }
}


