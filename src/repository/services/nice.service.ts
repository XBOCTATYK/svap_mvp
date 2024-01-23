import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class NiceService {
  abstract makeNice(): string;
}
