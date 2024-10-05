import { Test, TestingModule } from '@nestjs/testing';
import { DevelopService } from './develop.service';
import { PrismaService } from '@prismaService/prisma.service';

describe('DevelopService', () => {
  let service: DevelopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevelopService, PrismaService],
    }).compile();

    service = module.get<DevelopService>(DevelopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
