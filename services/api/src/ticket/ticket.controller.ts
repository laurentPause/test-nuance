import { Controller, Get } from '@nestjs/common';
import { TicketsService } from './ticket.service';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly service: TicketsService) {}

  @Get()
  pingServiceA() {
    return this.service.pingServiceA();
  }
}
