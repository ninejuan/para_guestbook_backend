import { Injectable } from '@nestjs/common';
import guestbookSchema from './models/guestbook.schema';
import Guestbook from './interface/guestbook.interface';
import { GuestbookDto } from './dto/guestbook.dto';
import { config } from 'dotenv';

config(); // 환경 변수 설정

@Injectable()
export class AppService {

  async getGuestbookContents(): Promise<Guestbook[]> {
    return guestbookSchema.find().sort({ createdAt: -1 });
  }

  async writeGuestbookContent(guestbookDto: GuestbookDto): Promise<string> {
    const { name, content } = guestbookDto;
    const newGuestbook = new guestbookSchema({ name, content, createdAt: Date.now() });
    
    await newGuestbook.save(); 
    return newGuestbook.name; 
  }

  async resetGuestbook() {
    await guestbookSchema.deleteMany({});
    return true;
  }
}
