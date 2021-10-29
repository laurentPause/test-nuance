import { Controller, Get, Post, Req } from '@nestjs/common';
import { UsersService } from './user.service';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  test() {
    return this.service.test();
  }

  @Post('auth')
  async login(@Req() request: Request) {
    return this.service.login(request.body);
  }

  @Post('register')
  async register(@Req() request: Request) {
    console.log('test register');
    console.log(request.body);

    return this.service.register(request.body);
  }
}
