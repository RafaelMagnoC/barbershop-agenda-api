import { Module } from '@nestjs/common';
import { EnterpriseService } from './enterprise.service';
import { EnterpriseController } from './enterprise.controller';
import { PrismaService } from '@prismaService/prisma.service';

@Module({
  controllers: [EnterpriseController],
  providers: [EnterpriseService, PrismaService],
})
export class EnterpriseModule {}
