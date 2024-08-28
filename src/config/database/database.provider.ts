import * as mysql from './mysql/mysql.config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      mysql;
    },
  },
];
