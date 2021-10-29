import {
  Inject,
  Injectable,
  Logger,
  RequestTimeoutException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
import { compareSync } from 'bcrypt';
import { catchError, map, throwError, timeout, TimeoutError } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER')
    private readonly client: ClientProxy,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    try {
      const user = await this.client
        .send({ role: 'user', cmd: 'get' }, { username })
        .pipe(
          timeout(5000),
          catchError((err) => {
            if (err instanceof TimeoutError) {
              return throwError(new RequestTimeoutException());
            }
            return throwError(err);
          }),
        )
        .toPromise();

      if (compareSync(password, user?.password)) {
        return user;
      }

      return null;
    } catch (e) {
      Logger.log(e);
      throw e;
    }
  }

  async login(data) {
    try {
      const pattern = { cmd: 'get' };
      return this.client
        .send<string>(pattern, data)
        .pipe(map((message: string) => ({ message })));
    } catch (error) {
      return { error: error };
    }
  }
}
