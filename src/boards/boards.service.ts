import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
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
  // DTO: 데이터 흐름 안정화 / 리턴값이 Promise의 타입은 Board entity에 저장되어있음
  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }
}
