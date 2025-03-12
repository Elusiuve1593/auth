import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { GetUserRequest } from './get-user-req.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get_user')
  getUser(data: GetUserRequest) {
    return this.appService.getUser(data);
  }
}
