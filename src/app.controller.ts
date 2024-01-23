import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { NiceService } from './repository/services/nice.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly niceService: NiceService,
  ) {}

  @Get()
  getHello(): string {
    console.log(this.niceService.makeNice());
    return this.appService.getHello();
  }
}
