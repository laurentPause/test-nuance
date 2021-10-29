import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';
import { TicketsController } from './ticket/ticket.controller';
import { TicketsService } from './ticket/ticket.service';
import { UsersController } from './user/user.controller';
import { UsersService } from './user/user.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TICKET',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8888,
        },
      },
      {
        name: 'USER',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8889,
        },
      },
      {
        name: 'AUTH',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 4000,
        },
      },
    ]),
  ],
  controllers: [AppController, TicketsController, UsersController],
  providers: [AppService, TicketsService, UsersService],
})
export class AppModule {}
