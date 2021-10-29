import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  level: number;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
