import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board.model';

@Entity() // 데코레이터 클래스 Entity(): 클래스 Board가 entity임을 나타냄(= CREATE TABLE board)
export class Board extends BaseEntity {
  // TypeORM 사용 시 DB 테이블로 변환되는 것은 class -> class 생성 후 그 안에 column 정의
  @PrimaryGeneratedColumn() // PK로 사용하는 column 지정하는 데코레이터
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
