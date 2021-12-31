import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid'; // DB가 아닌 로컬 환경에서 게시물에 고유한 id값 부여(v1 버전을 'uuid'로써 사용)
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

@Injectable()
//@ Injectable 데코레이터
// Nest.js는 이 데코레이터를 이용해서 다른 컴포넌트에서 이 Service를 사용할 수 있게(injectable, 종속성 주입) 만든다
export class BoardsService {
  // Inject Repository to Service
  constructor(
    @InjectRepository(BoardRepository) // InjectRepository 데코레이터 -> BoardRepository를 이 Service에서 사용할 수 있도록 boardRepository 변수에 넣어준다.
    private boardRepository: BoardRepository,
  ) {}

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }
}
