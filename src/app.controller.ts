import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ErrorHandlerException } from './errors/exception.error';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    throw new ErrorHandlerException('NOT_FOUND');

    return this.appService.getHello();
  }
}
