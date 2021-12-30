import { Injectable } from '@nestjs/common';

@Injectable()
//@ Injectable 데코레이터
// Nest.js는 이 데코레이터를 이용해서 다른 컴포넌트에서 이 Service를 사용할 수 있게(injectable, 종속성 주입) 만든다
export class BoardsService {}
