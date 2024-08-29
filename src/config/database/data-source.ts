import { DataSource, DataSourceOptions } from 'typeorm';
import * as path from 'path';

//const db_port: number = process.env.db_port ? +process.env.db_port : 3306;

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin',
  database: 'agendamento-barbearia-db',
  entities: [path.resolve(__dirname + '/../**/*.entity{.ts,.js}')],
  migrations: [path.resolve(__dirname + '/../**/migrations/{.ts,.js}')],
  synchronize: false,
  logging: true,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
