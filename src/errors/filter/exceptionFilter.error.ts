import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { MyLogger } from 'src/logger/logger';
import { ErrorHandlerException } from '../exception';

@Catch(ErrorHandlerException)
export class ErrorHandlerFilter implements ExceptionFilter {
  constructor(private readonly logger: MyLogger) {}

  catch(exception: ErrorHandlerException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    const status = exception.status;
    const id = exception.id;
    const message = exception.messageTreated;
    const data = exception.data;

    response.status(status).json({
      id,
      message,
      statusCode: status,
      data,
    });

    this.logger.error(`${id} - ${message}`);
  }
}
