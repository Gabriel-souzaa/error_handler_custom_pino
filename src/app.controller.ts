import {
  Controller,
  Get,
  Query,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ErrorGenericException } from './errors/exception';
import { PaginationInterceptor } from './interceptors/pagination.interceptor';
import { ZodValidationPipe } from './pipes';
import { ParamsHelloWorldSchema } from './schemas';
import { ParamsHelloWorldDto } from './dtos';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(PaginationInterceptor)
  @UsePipes(new ZodValidationPipe<ParamsHelloWorldDto>(ParamsHelloWorldSchema))
  getHello(@Query() params: ParamsHelloWorldDto) {
    return this.appService.execute(params.text, params.page, params.limit);
  }

  @Get('/err')
  getError(): string[] {
    throw new ErrorGenericException('ZOD_VALIDATION');
  }
}
