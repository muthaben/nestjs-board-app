import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid'; // DB가 아닌 로컬 환경에서 게시물에 고유한 id값 부여(v1 버전을 'uuid'로써 사용)
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
//@ Injectable 데코레이터
// Nest.js는 이 데코레이터를 이용해서 다른 컴포넌트에서 이 Service를 사용할 수 있게(injectable, 종속성 주입) 만든다
export class BoardsService {
  // 다른 컴포넌트의 boards 값 변경을 방지하고자 private 접근 제한자 사용
  private boards: Board[] = [];
  // boards의 데이터 타입은 미리 정의한 Board 모델을 활용
  // Board[]: 게시물은 두 개 이상의 복수가 될 것이므로 Board 하나가 아닌 여러개(배열) 필요

  getAllBoards(): Board[] {
    // BoardsController에서 getAllBoards 함수 호출 -> boards의 값을 모두 받음
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }

  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
