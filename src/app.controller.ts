import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ErrorGenericException } from './errors/exception';
import { PaginationInterceptor } from './interceptors/pagination.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @UseInterceptors(PaginationInterceptor)
  getHello(): string[] {
    return this.appService.getHello();
  }

  @Get('/err')
  getError(): string[] {
    throw new ErrorGenericException('ZOD_VALIDATION');
  }
}
