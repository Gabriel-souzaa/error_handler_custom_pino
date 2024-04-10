import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyLogger } from './logger/logger';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MyLogger],
  exports: [MyLogger],
})
export class AppModule { }
