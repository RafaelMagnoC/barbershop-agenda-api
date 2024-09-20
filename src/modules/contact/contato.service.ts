import { Injectable } from '@nestjs/common';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { Contato } from './entities/contato.entity';
import { PrismaService } from '@prismaService/prisma.service';
import { BaseService } from '@base/base.service';

@Injectable()
export class ContatoService {
  private readonly baseService: BaseService<Contato, CreateContatoDto, UpdateContatoDto>;

  constructor(readonly prisma: PrismaService) {
    this.baseService = new BaseService<Contato, CreateContatoDto, UpdateContatoDto>(prisma, 'contact');
  }
  async create(createContatoDto: CreateContatoDto): Promise<CreateContatoDto> {
    return await this.baseService.create(createContatoDto);
  }

  async find_many(): Promise<Contato[]> {
    return await this.baseService.find_many();
  }

  async find_unique(id: string): Promise<Contato> {
    return await this.baseService.find_unique(id);
  }

  async edit(id: string, updateContatoDto: UpdateContatoDto): Promise<Contato> {
    return await this.baseService.edit(id, updateContatoDto);
  }

  async remove(id: string): Promise<Boolean> {
    return await this.baseService.remove(id);
  }

  async exists(id: string): Promise<Contato> {
    return await this.baseService.exists(id);
  }
}
