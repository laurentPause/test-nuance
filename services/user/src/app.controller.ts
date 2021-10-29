import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { delay, of } from 'rxjs';
import { AppService } from './app.service';
import { User } from './schemas/user.schemas';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @MessagePattern({ cmd: 'test' })
  async test(_: any) {
    console.log(_);
    return of('Test').pipe(delay(1000));
  }

  @MessagePattern({ cmd: 'get' })
  getUser(data: any): Promise<User> {
    console.log('test');

    const user = this.service.findOne({ login: data.login });
    return user;
  }
  @MessagePattern({ cmd: 'add' })
  addUser(data: any): any {
    return this.service.createUser(data);
  }
}
