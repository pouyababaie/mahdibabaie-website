import {CallHandler, ExecutionContext, Injectable, NestInterceptor,} from '@nestjs/common';
import {map, Observable} from 'rxjs';
import {Config} from "../configs/vendors";

@Injectable()
export class HttpInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const headersRequest = {
      'Content-Type': 'application/json',
      'X-API-Key': Config.API_KEY
    }

    return next.handle().pipe(map((data) => {
      const response = context.switchToHttp().getResponse()
      response.header(headersRequest)
      return data
    }));
  }
}
