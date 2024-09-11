import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import guestbookSchema from './models/guestbook.schema';
import Guestbook from './interface/guestbook.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
