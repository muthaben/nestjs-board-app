import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';

// 애플리케이션에서 사용할 module 등록(진입점)
@Module({
  imports: [BoardsModule, TypeOrmModule.forRoot(typeORMConfig)],
  // forRoot안에 넣어준 설정(configuration)은 모든 sub-module에 다 적용됨
})
export class AppModule {}

/*
+ Nest.js 모듈
@Module() 데코레이터로 주석이 달린 클래스
@Module() 데코레이터는 Nest가 애플리케이션 구조를 구성하는 데 사용하는 메타 데이터를 제공
각 애플리케이션에는 하나 이상의 모듈(root 모듈)이 있다. 
루트 모듈은 Nest가 사용하는 시작점이다.

모듈은 밀접하게 관련된 기능 집합으로 요소를 구성하는 효과적인 방법이다.
(예. 유저 모듈, 주문 모듈, 채팅 모듈 등)
-> 같은 기능에 해당하는 것들은 하나의 모듈 폴더안에 넣어서 사용한다.
(예. UserController, UserService, UserEntity는 다 같은 기능이기에 UserModule 안에 넣는다)

모듈은 기본적으로 싱글 톤이므로 모듈간에 쉽게 공급자의 동일한 인스턴스를 공유할 수 있다.
(예. Shared Module -> Users Module / Orders Module / Chat Module)
*/
