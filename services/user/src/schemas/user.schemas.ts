import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from './role.schema';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  forename: string;

  @Prop({ required: true })
  mail: string;

  @Prop({ required: true })
  login: string;

  @Prop({ required: true, minlength: 8 })
  password: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
