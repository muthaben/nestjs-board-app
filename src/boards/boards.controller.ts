import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

// 클라이언트의 HTTP 요청을 처리하고 응답 반환
@Controller('boards')
// @Constroller 데코레이터로 클래스를 데코레이션 하여 정의
// 데코레이터는 인자로 Controller로 처리되는 '경로'를 받는다.
export class BoardsController {
  // Board Service가 처리한 결과를 Board Controller에서 이용할 수 있도록 클래스의 Constructor 안에서 종속성 주입(Dependency Injection)
  //* 접근 제한자(public, protected, private)를 constructor 생성자 파라미터에 선언하면 그 파라미터는 암묵적으로 클래스 프로퍼티로 선언된다.
  //* private 키워드를 사용하여 클래스 내부에서만 프로퍼티로 접근하여 사용 가능( 예. this.boardsService.getAllBoards(); )
  constructor(private boardsService: BoardsService) {}

  //@ 모든 게시물을 가져오는 핸들러 getAllBoard()
  // 클라이언트에서 boards/ 경로로 GET 요청 -> Controller가 알맞은 요청 경로에 라우팅해서 해당 핸들러로 라우팅
  @Get()
  getAllBoards(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }

  //@ 특정 id의 게시물을 가져오는 핸들러
  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }

  //@ 새 게시물 생성하는 핸들러
  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto);
  }

  //@ 특정 id의 게시물을 삭제하는 핸들러
  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id): Promise<void> {
    return this.boardsService.deleteBoard(id);
  }

  //@ 특정 id의 게시물의 공개 상태를 변경하는 핸들러
  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Promise<Board> {
    return this.boardsService.updateBoardStatus(id, status);
  }
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
