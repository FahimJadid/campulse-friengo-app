import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<User>;
@Schema({ timestamps: true })

export class User {
    @Prop({ required: true , unique: true})
    email: string;
    @Prop({ required: true })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
