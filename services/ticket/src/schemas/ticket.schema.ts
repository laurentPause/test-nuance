import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Status } from './status.schema';

export type TicketDocument = Ticket & Document;

@Schema()
export class Ticket {
  @Prop({ required: true })
  reference: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status', required: true })
  status: Status;

  @Prop({ required: true })
  author: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  agents: mongoose.Schema.Types.ObjectId[];

  @Prop({ required: true })
  attachments: mongoose.Schema.Types.ObjectId[];
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
