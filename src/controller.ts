import { Controller, Get, Param } from '@nestjs/common';
import { serviceT } from './service';

@Controller('cats')
export class CatsController {
  constructor(private readonly serviceT: serviceT) {}
  @Get('/findAll')
  findAll(): number {
    return this.serviceT.get();
  }
  @Get('/findSome/:id')
  findSome(@Param() params): string {
    console.log(params.id);
    return params.id;
  }
}
