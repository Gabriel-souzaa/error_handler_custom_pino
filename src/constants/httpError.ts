import { HttpStatus } from '@nestjs/common';

export enum ErrorPrefix {
  AUTHENTICATION = 'AUTH',
  DATABASE = 'DB',
  VALIDATION = 'VAL',
}

export const httpError: any = {
  NOT_FOUND: {
    id: '001',
    prefix: ErrorPrefix.VALIDATION,
    message: 'Não encontrado',
    statusCode: HttpStatus.NOT_FOUND,
  },
  ZOD_VALIDATION: {
    id: '002',
    prefix: ErrorPrefix.VALIDATION,
    message: 'Erro ao validar os campos',
    statusCode: HttpStatus.BAD_REQUEST,
  },
};
