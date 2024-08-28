import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const db_port: number = process.env.db_port ? +process.env.db_port : 3306;

export default (): MysqlConnectionOptions => ({
  type: process.env.db_type as any,
  host: process.env.db_host,
  port: db_port,
  username: process.env.db_username,
  password: process.env.db_password,
  database: process.env.db_database_name,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: true,
});
