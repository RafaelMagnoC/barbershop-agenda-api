import { Test, TestingModule } from '@nestjs/testing';
import { AttendantService } from './attendant.service';
import { PrismaService } from '@prismaService/prisma.service';

describe('AttendantService', () => {
  let service: AttendantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttendantService, PrismaService],
    }).compile();

    service = module.get<AttendantService>(AttendantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
