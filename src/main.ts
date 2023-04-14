import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const options: CorsOptions = {
    origin: [
      'http://localhost:3000',
      'http://127.0.0.1:5173',
      'http://localhost:5173',
    ], // agregar los orígenes permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // agregar los métodos permitidos
  };

  dotenv.config();

  app.enableCors(options);

  await app.listen(3000);
}
bootstrap();
