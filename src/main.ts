import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const server_port: number = process.env.server_port
    ? +process.env.server_port
    : 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(server_port);
}
bootstrap();
