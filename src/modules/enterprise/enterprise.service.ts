import { Injectable } from '@nestjs/common';
import { CreateEnterpriseDto } from './dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from './dto/update-enterprise.dto';
import { BaseService } from '@base/base.service';
import { EnterpriseEntity } from './entities/enterprise.entity';
import { PrismaService } from '@src/config/database/prisma.service';

@Injectable()
export class EnterpriseService {
  private readonly baseService: BaseService<EnterpriseEntity, CreateEnterpriseDto, UpdateEnterpriseDto>;

  constructor(readonly prisma: PrismaService) {
    this.baseService = new BaseService<EnterpriseEntity, CreateEnterpriseDto, CreateEnterpriseDto>(prisma, 'enterprise');
  }
  async create(createEnterpriseDto: CreateEnterpriseDto): Promise<EnterpriseEntity> {
    const { address, contact, name, social_reason, cnpj, logo, is_active } = createEnterpriseDto;
    const enterprise: EnterpriseEntity = await this.prisma.enterprise.create({
      data: {
        name: name,
        social_reason: social_reason,
        cnpj: cnpj,
        logo: logo,
        is_active: is_active,
        address: {
          create: address,
        },
        contact: {
          create: contact,
        },
      },
    });

    return enterprise;
  }

  async find_many(): Promise<EnterpriseEntity[]> {
    return await this.baseService.find_many();
  }

  async find_unique(id: string): Promise<EnterpriseEntity> {
    return await this.baseService.find_unique(id);
  }

  async edit(id: string, updateEnterpriseDto: UpdateEnterpriseDto): Promise<EnterpriseEntity> {
    return await this.baseService.edit(id, updateEnterpriseDto);
  }

  async remove(id: string): Promise<Boolean> {
    return await this.baseService.remove(id);
  }
}
