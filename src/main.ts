import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './logger/logger';
import { ErrorHandlerFilter } from './errors/filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useLogger(app.get(MyLogger));

  app.useGlobalFilters(new ErrorHandlerFilter());

  await app.listen(3000);
}
bootstrap();
