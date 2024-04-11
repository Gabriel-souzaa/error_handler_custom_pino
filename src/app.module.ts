import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyLogger } from './logger/logger';
import { APP_FILTER } from '@nestjs/core';
import { ErrorHandlerFilter } from './errors/filter';

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
  ],
  exports: [MyLogger],
})
export class AppModule { }
