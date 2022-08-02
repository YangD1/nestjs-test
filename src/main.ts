import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsArr: Array<any> = [
    'http://localhost:8080',
    'http://192.168.2.51:5173',
    // "origin": "*",
    // "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    // "preflightContinue": false,
    // "optionsSuccessStatus": 204
  ];
  console.log(corsArr);
  app.enableCors({
    origin: corsArr,
    credentials: true,
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // preflightContinue: false,
    // optionsSuccessStatus: 204,
  });
  await app.listen(3000);
}
bootstrap();
