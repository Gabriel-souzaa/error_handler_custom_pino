import { ErrorPrefix } from '../../constants';
import { ErrorHandlerException } from './exception.error';

export class ErrorGenericException extends ErrorHandlerException {
  constructor(message: string) {
    super(message, ErrorPrefix.VALIDATION);
  }
}
