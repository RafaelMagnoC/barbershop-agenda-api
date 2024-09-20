import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { BaseService } from '@base/base.service';
import { AddressEntity } from './entities/address.entity';
import { PrismaService } from '@prismaService/prisma.service';

@Injectable()
export class AddressService {
  private readonly baseService: BaseService<AddressEntity, CreateAddressDto, UpdateAddressDto>;

  constructor(readonly prisma: PrismaService) {
    this.baseService = new BaseService<AddressEntity, CreateAddressDto, UpdateAddressDto>(prisma, 'address');
  }

  async create(createEnderecoDto: CreateAddressDto): Promise<AddressEntity> {
    return await this.baseService.create(createEnderecoDto);
  }

  async find_many(): Promise<AddressEntity[]> {
    return await this.baseService.find_many();
  }

  async find_unique(id: string): Promise<AddressEntity> {
    return await this.baseService.find_unique(id);
  }

  async edit(id: string, updateEnderecoDto: UpdateAddressDto): Promise<AddressEntity> {
    return await this.baseService.edit(id, updateEnderecoDto);
  }

  async remove(id: string): Promise<Boolean> {
    return await this.baseService.remove(id);
  }
}
