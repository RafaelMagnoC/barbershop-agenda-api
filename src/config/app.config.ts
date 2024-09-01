import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  port: +process.env.server_port,
  nodenv: process.env.NODE_ENV,
}));
