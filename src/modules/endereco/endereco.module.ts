import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { EnderecoController } from './endereco.controller';
import { PrismaService } from 'src/config/database/prisma.service';

@Module({
  imports: [],
  controllers: [EnderecoController],
  providers: [EnderecoService, PrismaService],
  exports: [EnderecoService],
})
export class EnderecoModule {}
