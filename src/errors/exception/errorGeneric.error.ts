import { ErrorPrefix } from '../../constants';
import { ErrorHandlerException } from './exception.error';

export class ErrorGenericException extends ErrorHandlerException {
  constructor(message: string, data?: unknown) {
    super(message, ErrorPrefix.VALIDATION, data);
  }
}
