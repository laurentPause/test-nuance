import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { Ticket, TicketSchema } from './schemas/ticket.schema';
import { Status, StatusSchema } from './schemas/status.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/ticket'),
    MongooseModule.forFeature([
      { name: Ticket.name, schema: TicketSchema },
      { name: Status.name, schema: StatusSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
