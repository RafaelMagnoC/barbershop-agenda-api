import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { BaseService } from '@base/base.service';
import { ServiceEntity } from './entities/service.entity';
import { PrismaService } from '@prismaService/prisma.service';

@Injectable()
export class ServiceService {
  private readonly baseService: BaseService<ServiceEntity, CreateServiceDto, UpdateServiceDto>;

  constructor(readonly prisma: PrismaService) {
    this.baseService = new BaseService<ServiceEntity, CreateServiceDto, UpdateServiceDto>(prisma, 'service');
  }
  async create(createServiceDto: CreateServiceDto): Promise<ServiceEntity> {
    return await this.baseService.create(createServiceDto);
  }

  async find_many(): Promise<ServiceEntity[]> {
    return await this.baseService.find_many();
  }

  async find_unique(id: string): Promise<ServiceEntity> {
    return await this.baseService.find_unique(id);
  }

  async edit(id: string, updateServiceDto: UpdateServiceDto): Promise<ServiceEntity> {
    return await this.baseService.edit(id, updateServiceDto);
  }

  async remove(id: string): Promise<Boolean> {
    return await this.baseService.remove(id);
  }
}
