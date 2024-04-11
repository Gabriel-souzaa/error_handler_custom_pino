import { httpError } from '../../constants/httpError';

export class ErrorHandlerException extends Error {
  protected _status: number;
  protected _messageTreated: string;
  protected _id: string;
  protected _prefix: string;

  protected constructor(message: string, prefix: string) {
    super(message);

    this._messageTreated =
      httpError[message].message || 'Erro interno no servidor.';
    this._status = httpError[message].statusCode || 500;
    this._id = httpError[message].id;
    this._prefix = prefix;
  }

  get id() {
    return `${this._prefix}-${this._id}`;
  }

  get status() {
    return this._status;
  }

  get messageTreated() {
    return this._messageTreated;
  }
}
