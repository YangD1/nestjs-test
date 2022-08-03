import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsArr: Array<any> = [
    'http://localhost:8080',
    'http://192.168.2.51:5173',
  ];
  app.enableCors({
    origin: corsArr,
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
