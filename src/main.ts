import 'dotenv/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ClassSerializerInterceptor, Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle('Yago Barber Shop').setDescription('api para gerenciar recursos do sistema Yago Barber Shop').setVersion('1.0').addTag('Yago Barber Shop').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    jsonDocumentUrl: 'api/json',
  });

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const logger = new Logger('Bootstrap');
  const port = process.env.server_port || 3000;
  await app.listen(port);
  logger.log(`Server is running on port ${port}`);
}
bootstrap();
