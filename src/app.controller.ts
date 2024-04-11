import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ErrorGenericException } from './errors/exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    throw new ErrorGenericException('ZOD_VALIDATION');

    return this.appService.getHello();
  }
}
