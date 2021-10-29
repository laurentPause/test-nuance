import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type StatusDocument = Status & Document;

@Schema()
export class Status {
  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  code: number;

  @Prop({ required: true })
  color: string;
}

export const StatusSchema = SchemaFactory.createForClass(Status);
