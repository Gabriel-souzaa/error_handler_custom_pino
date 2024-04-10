import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { ErrorHandlerException } from './exception.error';
import { MyLogger } from 'src/logger/logger';

@Catch(ErrorHandlerException)
export class ErrorHandlerFilter implements ExceptionFilter {
  catch(exception: ErrorHandlerException, host: ArgumentsHost) {
    const logger = new MyLogger();

    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    const status = exception.getStatus();
    const id = exception.getId();
    const message = exception.getMessage();

    response.status(status).json({
      id,
      message,
      statusCode: status,
    });

    logger.error(`${id} - ${message}`);
  }
}
