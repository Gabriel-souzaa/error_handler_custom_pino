import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type ResponseInterceptor<T> = {
  data: T;
  totalPage: number;
  currentPage: number;
  pageSize: number;
};

@Injectable()
export class PaginationInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseInterceptor<T>> {
    const request = context.switchToHttp().getRequest();
    const limit = parseInt(request.query.limit, 10) || 10;
    const page = parseInt(request.query.page, 10) || 1;

    return next.handle().pipe(
      map((data) => ({
        data: data.data,
        totalPage: data.totalPage,
        currentPage: page,
        pageSize: limit,
      })),
    );
  }
}
