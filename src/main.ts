import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get(`server_port`);

  const config = new DocumentBuilder()
    .setTitle('Yago Barber Shop')
    .setDescription('api para gerenciar recursos do sistema Yago Barber Shop')
    .setVersion('1.0')
    .addTag('Yago Barber Shop')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    jsonDocumentUrl: 'api/json',
  });
  await app.listen(port);
}
bootstrap();
