import { Test, TestingModule } from '@nestjs/testing';
import { ClubService } from './club.service';
import { PrismaService } from '@prismaService/prisma.service';

describe('ClubService', () => {
  let service: ClubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClubService, PrismaService],
    }).compile();

    service = module.get<ClubService>(ClubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
