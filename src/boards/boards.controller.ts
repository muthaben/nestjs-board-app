import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';

// 클라이언트의 HTTP 요청을 처리하고 응답 반환
@Controller('boards')
// @Constroller 데코레이터로 클래스를 데코레이션 하여 정의
// 데코레이터는 인자로 Controller로 처리되는 '경로'를 받는다.
export class BoardsController {
  // Board Service를 Board Controller에서 이용할 수 있도록 클래스의 Constructor 안에서 종속성 주입(Dependency Injection)
  //* 접근 제한자(public, protected, private)를 constructor 생성자 파라미터에 선언하면 그 파라미터는 암묵적으로 클래스 프로퍼티로 선언된다.
  //* private 키워드를 사용하여 클래스 내부에서만 프로퍼티로 접근하여 사용 가능( 예. this.boardsService.getAllBoards(); )
  constructor(private boardService: BoardsService) {}
}

/*
@Controller('board')
export class BoardController {
  3. TypeScript에서는 선언한 값만 객체의 프로퍼티로 사용 가능하므로 
     위에서 boardsService: BoardsService로 선언한다.
  boardsService: BoardsService;

  1. boardsService 파라미터에 BoardsService 객체를 타입으로 지정한다.
  constructor(boardsService: BoardsService) {
  2. 이 boardsService 파라미터를 BoardsService 클래스 안에서 사용하기 위해 
     this.boardsService 프로퍼티에 boardsService 파라미터를 할당한다.
    this.boardsService = boardsService;
  }
}
*/
