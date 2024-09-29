import { Test, TestingModule } from '@nestjs/testing';
import { DevelopService } from './develop.service';

describe('DevelopService', () => {
  let service: DevelopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevelopService],
    }).compile();

    service = module.get<DevelopService>(DevelopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
