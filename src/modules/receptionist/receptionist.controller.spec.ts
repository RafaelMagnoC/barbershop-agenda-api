import { Test, TestingModule } from '@nestjs/testing';
import { ReceptionistController } from './receptionist.controller';
import { ReceptionistService } from './receptionist.service';
import { PrismaService } from '@prismaService/prisma.service';

describe('ReceptionistController', () => {
  let controller: ReceptionistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReceptionistController],
      providers: [ReceptionistService, PrismaService],
    }).compile();

    controller = module.get<ReceptionistController>(ReceptionistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
