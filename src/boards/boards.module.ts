import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  // boards.controller.ts 파일 생성 후 사용할 수 있도록 자동 등록
  controllers: [BoardsController],
  // boards.service.ts 파일 생성 후 자동 등록
  providers: [BoardsService],
})
export class BoardsModule {}
