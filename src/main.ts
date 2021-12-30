import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 가장 큰 범위의 root 모듈인 AppModule 생성
  await app.listen(3000);
  // 포트번호 지정
}
bootstrap(); // 애플리케이션 실행
