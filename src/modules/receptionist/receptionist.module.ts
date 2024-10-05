import { Module } from '@nestjs/common';
import { ReceptionistService } from './receptionist.service';
import { ReceptionistController } from './receptionist.controller';
import { PrismaService } from '@prismaService/prisma.service';

@Module({
  controllers: [ReceptionistController],
  providers: [ReceptionistService, PrismaService],
})
export class ReceptionistModule {}
