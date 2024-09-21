import { Test, TestingModule } from '@nestjs/testing';
import { EnterpriseService } from './enterprise.service';
import { PrismaService } from '@prismaService/prisma.service';

describe('EnterpriseService', () => {
  let service: EnterpriseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnterpriseService, PrismaService],
    }).compile();

    service = module.get<EnterpriseService>(EnterpriseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
