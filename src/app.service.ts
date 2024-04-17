import { Injectable } from '@nestjs/common';
import { ResponseService, Service } from './base';

@Injectable()
export class AppService implements Service<string[]> {
  execute(
    text: string,
    currentPage: number,
    pageSize: number,
  ): ResponseService<string[]> {
    return {
      data: [text],
      totalPage: 10,
    };
  }
}
