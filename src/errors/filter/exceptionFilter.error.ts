import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { MyLogger } from 'src/logger/logger';
import { ErrorHandlerException } from '../exception';

@Catch(ErrorHandlerException)
export class ErrorHandlerFilter implements ExceptionFilter {
  catch(exception: ErrorHandlerException, host: ArgumentsHost) {
    const logger = new MyLogger();

    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    const status = exception._status;
    const id = exception._id;
    const message = exception._message;

    response.status(status).json({
      id,
      message,
      statusCode: status,
    });

    logger.error(`${id} - ${message}`);
  }
}
