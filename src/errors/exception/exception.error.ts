import { httpError } from '../../constants/httpError';

export class ErrorHandlerException extends Error {
  private status: number;
  private messageTreated: string;
  private id: string;
  private prefix: string;

  constructor(message: string, prefix: string) {
    super(message);

    this.messageTreated =
      httpError[message].message || 'Erro interno no servidor.';
    this.status = httpError[message].statusCode || 500;
    this.id = httpError[message].id;
    this.prefix = prefix;
  }

  get _id() {
    return `${this.prefix}-${this.id}`;
  }

  get _status() {
    return this.status;
  }

  get _message() {
    return this.messageTreated;
  }
}
