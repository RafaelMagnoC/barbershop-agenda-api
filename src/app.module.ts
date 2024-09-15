import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ContatoModule } from './modules/contato/contato.module';
import { EnderecoModule } from './modules/endereco/endereco.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      envFilePath: ['.env.prod', '.env.dev'],
    }),
    UsuarioModule,
    ContatoModule,
    EnderecoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
