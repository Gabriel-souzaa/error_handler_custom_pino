import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class PaginationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    const limit = parseInt(request.query.limit, 10) || 10;
    const page = parseInt(request.query.page, 10) || 1;

    return next.handle().pipe(
      tap((data) => {
        if (Array.isArray(data)) {
          response.status(200).json({
            data,
            currentPage: page,
            pageSize: limit,
            totalPages: 10,
          });
        }
      }),
    );
  }
}
