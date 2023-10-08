import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as manifest from '@manifest';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO Grab this from a `ConfigStore`
  const ENV = process.env.NODE_ENV;

  if (ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle(manifest.name)
      .setVersion(manifest.version)
      .setDescription(manifest.description)
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }

  // TODO Extract to envfile
  await app.listen(4200);
}
bootstrap();
