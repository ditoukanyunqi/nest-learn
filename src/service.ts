import { Injectable } from '@nestjs/common';

@Injectable()
export class serviceT {
  get(): number {
    return 123123;
  }
}
