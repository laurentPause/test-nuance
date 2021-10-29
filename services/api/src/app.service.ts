import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(@Inject('TICKET') private readonly clientTicket: ClientProxy) {}

  pingServiceA() {
    const pattern = { cmd: 'test' };
    const data = { test: 'imarche' };
    return this.clientTicket
      .send<string>(pattern, data)
      .pipe(map((message: string) => ({ message })));
  }
}
