export class CreateBoardDto {
  title: string;
  description: string;
}

/*
+ DTO(Data Transfer Object)
  1. 정의
  - 계층 간 데이터 교환을 위한 객체
  - DB에서 데이터를 얻어 Service나 Controller 등으로 보낼 때 사용하는 객체
  - 데이터가 네트워크를 통해 전송되는 방법을 정의하는 객체
  - interface나 class 이용하여 정의 가능(class 추천)
  2. 사용하는 이유
  - 효율적인 데이터 유효성 검사
  - 더 안정적인 코드 작성 가능(TS의 타입으로도 사용) -> 유지보수 용이
*/
