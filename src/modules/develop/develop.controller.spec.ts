import { Test, TestingModule } from '@nestjs/testing';
import { DevelopController } from './develop.controller';
import { DevelopService } from './develop.service';
import { PrismaService } from '@prismaService/prisma.service';

describe('DevelopController', () => {
  let controller: DevelopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevelopController],
      providers: [DevelopService, PrismaService],
    }).compile();

    controller = module.get<DevelopController>(DevelopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
