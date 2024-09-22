import { Test, TestingModule } from '@nestjs/testing';
import { GalleryService } from './gallery.service';
import { PrismaService } from '@prismaService/prisma.service';

describe('GalleryService', () => {
  let service: GalleryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GalleryService, PrismaService],
    }).compile();

    service = module.get<GalleryService>(GalleryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
