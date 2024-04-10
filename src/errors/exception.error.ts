import { httpError } from '../constants/httpError';

export class ErrorHandlerException extends Error {
  private status: number;
  private messageTreated: string;
  private id: string;
  private prefix: string;

  constructor(message: string) {
    super(message);

    this.messageTreated =
      httpError[message].message || 'Erro interno no servidor.';
    this.status = httpError[message].statusCode || 500;
    this.id = httpError[message].id;
    this.prefix = httpError[message].prefix;
  }

  public getId() {
    return `${this.prefix}-${this.id}`;
  }

  public getStatus() {
    return this.status;
  }

  public getMessage() {
    return this.messageTreated;
  }
}
