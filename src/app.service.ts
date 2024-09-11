import { Injectable } from '@nestjs/common';
import guestbookSchema from './models/guestbook.schema';
import Guestbook from './interface/guestbook.interface';
import { GuestbookDto } from './dto/guestbook.dto';
import { config } from 'dotenv';

config(); const env = process.env;

@Injectable()
export class AppService {
  async getGuestbookContents() {
    return 'Hello World!';
  }

  async writeGuestbookContent() {

  }
}
