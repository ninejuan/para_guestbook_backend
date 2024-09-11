import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import guestbookSchema from './models/guestbook.schema';
import Guestbook from './interface/guestbook.interface';
import { GuestbookDto } from './dto/guestbook.dto';
import { config } from 'dotenv';

config(); const env = process.env;

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('books')
  async getGuestbookContents() {
    return this.appService.getGuestbookContents();
  }

  @Post('write')
  async writeGuestbookContent() {

  }
}
