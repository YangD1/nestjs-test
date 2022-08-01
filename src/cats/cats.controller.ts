import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('test')
  test(): string {
    return 'testRouter';
  }

  @Post('post-cat')
  postCat(): string {
    return 'post cat';
  }
}
