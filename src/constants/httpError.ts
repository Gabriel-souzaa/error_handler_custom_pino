import { HttpStatus } from '@nestjs/common';

export const httpError: any = {
  NOT_FOUND: {
    id: '001',
    message: 'Não encontrado',
    statusCode: HttpStatus.NOT_FOUND,
  },
  ZOD_VALIDATION: {
    id: '002',
    message: 'Erro ao validar os campos',
    statusCode: HttpStatus.BAD_REQUEST,
  },
};
