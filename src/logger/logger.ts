import { Injectable, LoggerService } from '@nestjs/common';
import pino, { Logger } from 'pino';
import pretty from 'pino-pretty';

@Injectable()
export class MyLogger implements LoggerService {
  private readonly logger: Logger;

  constructor() {
    const stream = pretty({
      colorize: true,
    });

    this.logger = pino({}, stream);
  }

  log(message: any) {
    this.logger.info(message);
  }

  fatal(message: any) {
    this.logger.fatal(message);
  }

  error(message: any) {
    this.logger.error(message);
  }

  warn(message: any) {
    this.logger.warn(message);
  }

  debug?(message: any) {
    this.logger.debug(message);
  }
}
