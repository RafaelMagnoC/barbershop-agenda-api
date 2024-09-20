import { Test, TestingModule } from '@nestjs/testing';
import { ContatoService } from './contato.service';
import { PrismaService } from '@prismaService/prisma.service';

describe('ContatoService', () => {
  let service: ContatoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContatoService, PrismaService],
    }).compile();

    service = module.get<ContatoService>(ContatoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
