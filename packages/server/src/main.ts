import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseIntercept } from './common/responseIntercept';
import { AbnormalFilter } from './common/abnormalFilter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ResponseIntercept());
  app.useGlobalFilters(new AbnormalFilter());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
