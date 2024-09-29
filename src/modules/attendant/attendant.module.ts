import { Module } from '@nestjs/common';
import { AttendantService } from './attendant.service';
import { AttendantController } from './attendant.controller';
import { PrismaService } from '@prismaService/prisma.service';

@Module({
  controllers: [AttendantController],
  providers: [AttendantService, PrismaService],
})
export class AttendantModule {}
