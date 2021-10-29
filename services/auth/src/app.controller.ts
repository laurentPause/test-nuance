import { Controller, UseGuards } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AppService) {}

  // @UseGuards(LocalAuthGuard)
  @MessagePattern({ cmd: 'auth' })
  async login(_: any) {
    // return { test: 'test' };
    const result = this.authService.login(_);

    return result;
  }
}
