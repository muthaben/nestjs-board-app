import { Controller } from '@nestjs/common';

// 클라이언트의 HTTP 요청을 처리하고 응답 반환
@Controller('boards')
// @Constroller 데코레이터로 클래스를 데코레이션 하여 정의
// 데코레이터는 인자로 Controller로 처리되는 '경로'를 받는다.
export class BoardsController {}
