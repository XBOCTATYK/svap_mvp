import { NiceService } from './nice.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GameNiceService extends NiceService {
  makeNice() {
    return 'nice';
  }
}
