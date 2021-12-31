import { EntityRepository, Repository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@EntityRepository(Board) // class가 Board를 컨트롤 하는 사용자 정의 repository임을 선언
// extends: entity를 삽입, 조회, 수정, 삭제 등 컨트롤하기 위해서 필요한 키워드
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    // 게시물(Board 객체) 생성 - create
    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    // 게시물 DB 저장 - save
    await this.save(board);
    return board;
  }
}
