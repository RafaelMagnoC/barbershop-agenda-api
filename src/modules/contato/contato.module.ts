import { Module } from '@nestjs/common';
import { ContatoService } from './contato.service';
import { ContatoController } from './contato.controller';

@Module({
  imports: [],
  controllers: [ContatoController],
  providers: [ContatoService],
})
export class ContatoModule {}
