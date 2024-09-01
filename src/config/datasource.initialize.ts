import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import 'reflect-metadata';
import 'dotenv/config';

const configService = new ConfigService();

console.log({
  entities: [`src/**/*.entity.ts`],
  migrations: [`src/migrations/*.ts`],
});

export default new DataSource({
  type: 'mysql',
  host: configService.get('db_host'),
  port: +configService.get('db_port'),
  username: configService.get('db_username'),
  password: configService.get('db_password'),
  database: configService.get('db_name'),
  entities: [`src/**/*.entity.ts`],
  migrations: [`src/migrations/*.ts`],
  synchronize: false,
  logging: configService.get('NODE_ENV') === 'development',
});
