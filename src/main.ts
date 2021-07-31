import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ContentTypeMiddleware} from './middlewares/content-type.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(new ContentTypeMiddleware().use)
  await app.listen(3000);
}
bootstrap();
