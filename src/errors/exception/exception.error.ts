import { httpError } from '../../constants/httpError';

export class ErrorHandlerException extends Error {
  protected _status: number;
  protected _messageTreated: string;
  protected _id: string;
  protected _prefix: string;
  private _data: unknown;

  protected constructor(message: string, prefix: string, data?: unknown) {
    super(message);

    this._messageTreated =
      httpError[message].message || 'Erro interno no servidor.';
    this._status = httpError[message].statusCode || 500;
    this._id = httpError[message].id;
    this._prefix = prefix;
    this._data = data;
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

  get data() {
    return this._data;
  }
}
