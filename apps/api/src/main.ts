import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors({
    origin: process.env.FRONTEND_URL ?? 'http://localhost:3000',
    methods: ['GET', 'POST'],
  });

  const config = new DocumentBuilder()
    .setTitle('Portfolio API')
    .setDescription('Personal portfolio backend API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  if (process.env.NODE_ENV !== 'production') {
    const outputPath = resolve(
      __dirname,
      '../../../packages/openapi/schema/openapi.json',
    );
    writeFileSync(outputPath, JSON.stringify(document, null, 2));
  }

  await app.listen(process.env.PORT ?? 3001);
}

bootstrap();
