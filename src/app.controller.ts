import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // 클라이언트의 HTTP GET 요청을 받아 처리하는 코드
  getHello(): string {
    return this.appService.getHello();
  }
}
