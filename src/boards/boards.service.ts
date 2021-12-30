import { Injectable } from '@nestjs/common';

@Injectable()
//@ Injectable 데코레이터
// Nest.js는 이 데코레이터를 이용해서 다른 컴포넌트에서 이 Service를 사용할 수 있게(injectable, 종속성 주입) 만든다
export class BoardsService {
  // 다른 컴포넌트의 boards 값 변경을 방지하고자 private 접근 제한자 사용
  private boards = [
    {
      title: 'Nest.js로 게시판 만들기',
      body: '1. Nest.js Board Module을 생성한다. 2. Board Controller와 Service를 생성한다.',
    },
  ];

  getAllBoards() {
    // BoardsController에서 getAllBoards 함수 호출 -> boards의 값을 모두 받음
    return this.boards;
  }
}
