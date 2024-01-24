import type { ExecutionContext, NestInterceptor, CallHandler } from '@nestjs/common';
import type { Observable } from 'rxjs';
export declare class ResponseIntercept implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
