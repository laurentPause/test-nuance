import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private service: AppService) {}

  @MessagePattern({ cmd: 'test' })
  async test(_: any) {
    console.log(_);
    console.log(await this.service.allStatus());
    return of(await this.service.allStatus()).pipe(delay(1000));
  }
}
