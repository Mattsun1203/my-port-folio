import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { AppModule } from '../src/app.module';

async function generate() {
  const app = await NestFactory.create(AppModule, { logger: false });

  const config = new DocumentBuilder()
    .setTitle('Portfolio API')
    .setDescription('Personal portfolio backend API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  const outputPath = resolve(
    __dirname,
    '../../../packages/openapi/schema/openapi.json',
  );

  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, JSON.stringify(document, null, 2));

  console.log(`✅ OpenAPI schema written to: ${outputPath}`);

  await app.close();
}

generate().catch((err) => {
  console.error('Failed to generate OpenAPI schema:', err);
  process.exit(1);
});
