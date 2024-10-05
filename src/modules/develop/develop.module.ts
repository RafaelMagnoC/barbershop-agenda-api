import { Module } from '@nestjs/common';
import { DevelopService } from './develop.service';
import { DevelopController } from './develop.controller';
import { PrismaService } from '@prismaService/prisma.service';

@Module({
  controllers: [DevelopController],
  providers: [DevelopService, PrismaService],
})
export class DevelopModule {}
