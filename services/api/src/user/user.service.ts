import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER') private client: ClientProxy,
    @Inject('AUTH') private auth: ClientProxy,
  ) {}

  test() {
    const pattern = { cmd: 'test' };
    try {
      const res = this.client
        .send(pattern, {})
        .pipe(map((response: string) => ({ response })));

      return res;
    } catch (error) {
      return error;
    }
  }

  login(user) {
    const pattern = { cmd: 'auth' };
    try {
      const res = this.auth
        .send(pattern, user)
        .pipe(map((response: string) => ({ response })));
      return res;
    } catch (error) {
      console.log('error', error);

      return error;
    }
  }

  register(user) {
    const pattern = { cmd: 'add' };
    try {
      const res = this.client
        .send(pattern, user)
        .pipe(map((response: string) => ({ response })));
      return res;
    } catch (error) {
      console.log('error', error);

      return error;
    }
  }
}
