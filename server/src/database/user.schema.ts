import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<User>;