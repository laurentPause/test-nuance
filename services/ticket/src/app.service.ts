import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Status, StatusDocument } from './schemas/status.schema';
import { Ticket, TicketDocument } from './schemas/ticket.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Ticket.name) private ticketModel: Model<TicketDocument>,
    @InjectModel(Status.name) private statusModel: Model<StatusDocument>,
  ) {}

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.find().exec();
  }

  async allStatus(): Promise<Status[]> {
    return this.statusModel.find().exec();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
