import { Module } from '@nestjs/common';
import { DevelopService } from './develop.service';
import { DevelopController } from './develop.controller';

@Module({
  controllers: [DevelopController],
  providers: [DevelopService],
})
export class DevelopModule {}
