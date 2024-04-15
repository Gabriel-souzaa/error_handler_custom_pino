import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyLogger } from './logger/logger';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorHandlerFilter } from './errors/filter';
import { PaginationInterceptor } from './interceptors/pagination.interceptor';

@Global()
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    MyLogger,
    {
      provide: APP_FILTER,
      useClass: ErrorHandlerFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: PaginationInterceptor,
    },
  ],
  exports: [MyLogger],
})
export class AppModule { }
