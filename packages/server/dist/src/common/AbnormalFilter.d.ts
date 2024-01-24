import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
export declare class AbnormalFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
