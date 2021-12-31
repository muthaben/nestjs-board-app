/* 
  Board Model: 게시물에 어떤 종류의 데이터가 어떤 것(Id, 제목, 설명, 공개 상태 등)인지 정의
  interface 이용 -> 변수의 타입만 체크 (구조 정의)
  class 이용 -> 변수의 타입 체크, 인스턴스 생성도 가능
*/
// export interface Board {
//   id: string;
//   title: string;
//   description: string;
//   status: BoardStatus;
// }

// BoardStatus: 게시물이 공개 상태인지 비공개 상태인지 나눠주는 것
export enum BoardStatus {
  //* 공개/비공개 상태만 나타나야 하므로 TS enumeration 기능 사용
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
