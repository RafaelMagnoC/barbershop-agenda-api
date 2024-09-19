import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { BaseService } from '../base/base.service';
import { Endereco } from './entities/endereco.entity';
import { PrismaService } from 'src/config/database/prisma.service';

@Injectable()
export class EnderecoService {
  private readonly baseService: BaseService<Endereco, CreateEnderecoDto, UpdateEnderecoDto>;

  constructor(readonly prisma: PrismaService) {
    this.baseService = new BaseService<Endereco, CreateEnderecoDto, UpdateEnderecoDto>(prisma, 'address');
  }

  async create(createEnderecoDto: CreateEnderecoDto): Promise<Endereco> {
    return await this.baseService.create(createEnderecoDto);
  }

  async find_many(): Promise<Endereco[]> {
    return await this.baseService.find_many();
  }

  async find_unique(id: string): Promise<Endereco> {
    return await this.baseService.find_unique(id);
  }

  async edit(id: string, updateEnderecoDto: UpdateEnderecoDto): Promise<Endereco> {
    return await this.baseService.edit(id, updateEnderecoDto);
  }

  async remove(id: string): Promise<Boolean> {
    return await this.baseService.remove(id);
  }
}
