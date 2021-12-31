import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';

@EntityRepository(Board) // class가 Board를 컨트롤 하는 사용자 정의 repository임을 선언
// extends: entity를 삽입, 조회, 수정, 삭제 등 컨트롤하기 위해서 필요한 키워드
export class BoardRepository extends Repository<Board> {}
