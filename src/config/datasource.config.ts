import { registerAs } from '@nestjs/config';

export default registerAs('dbconnection', () => ({
  type: 'mysql',
  host: process.env.db_host,
  port: +process.env.db_port,
  username: process.env.db_username,
  password: process.env.db_password,
  database: process.env.db_name,
  entities: [`${__dirname}/**/*.entity.ts`],
  migrations: [`${__dirname}/migrations/*.ts`],
  synchronize: false,
  logging: true,
}));
