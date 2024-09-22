import { Test, TestingModule } from '@nestjs/testing';
import { AdministratorService } from './administrator.service';
import { PrismaService } from '@prismaService/prisma.service';

describe('AdministratorService', () => {
  let service: AdministratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdministratorService, PrismaService],
    }).compile();

    service = module.get<AdministratorService>(AdministratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
