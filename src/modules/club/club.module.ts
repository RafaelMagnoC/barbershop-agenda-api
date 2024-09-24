import { Module } from '@nestjs/common';
import { ClubService } from './club.service';
import { ClubController } from './club.controller';
import { PrismaService } from '@prismaService/prisma.service';

@Module({
  controllers: [ClubController],
  providers: [ClubService, PrismaService],
})
export class ClubModule {}
