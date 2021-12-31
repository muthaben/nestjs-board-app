import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board.model';
/*
인터페이스 PipeTransform을 새롭게 만들 커스텀 파이프에 구현해야 함
모든 파이프에서 구현해줘야하는 인터페이스로서 메서드 transform()을 필요로 함
이 메서드는 Nest.js가 arguments를 처리하기 위해 사용
*/
export class BoardStatusValidationPipe implements PipeTransform {
  // readonly: 클래스 외부에서 접근만 가능(변경 불가)
  readonly StatusOptions = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  transform(value: any) {
    // value: 처리가 된 인자의 값, metadata: 인자에 대한 메타데이터를 포함한 객체
    // 메서드 transform()에서 리턴된 값은 Route 핸들러로 전해지고, 예외가 발생하면 바로 클라이언트에 전해짐
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
