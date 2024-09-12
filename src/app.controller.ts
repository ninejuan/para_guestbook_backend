import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import guestbookSchema from './models/guestbook.schema';
import Guestbook from './interface/guestbook.interface';
import { GuestbookDto } from './dto/guestbook.dto';
import { config } from 'dotenv';

config();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('books')
  async getGuestbookContents() {
    return this.appService.getGuestbookContents();
  }

  @Post('write')
  async writeGuestbookContent(@Body() guestbookDto: GuestbookDto) {
    return this.appService.writeGuestbookContent(guestbookDto);
  }

  @Delete('reset')
  rgb() {
    return this.appService.resetGuestbook();
  }
}
