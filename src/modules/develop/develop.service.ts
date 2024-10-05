import { Injectable } from '@nestjs/common';
import { CreateDevelopDto } from './dto/create-develop.dto';
import { UpdateDevelopDto } from './dto/update-develop.dto';
import { DevelopEntity } from './entities/develop.entity';
import { BaseService } from '../base/base.service';
import { PrismaService } from '@prismaService/prisma.service';

@Injectable()
export class DevelopService {
  private readonly baseService: BaseService<DevelopEntity, CreateDevelopDto, UpdateDevelopDto>;
  constructor(readonly prisma: PrismaService) {
    this.baseService = new BaseService<DevelopEntity, CreateDevelopDto, UpdateDevelopDto>(prisma, 'develop');
  }
  async create(createDevelopDto: CreateDevelopDto): Promise<DevelopEntity> {
    const { user } = createDevelopDto;

    const develop: DevelopEntity = await this.prisma.develop.create({
      data: {
        user: {
          create: {
            name: user.name,
            birthday: user.birthday,
            gender: user.gender,
            username: user.username,

            address: {
              create: {
                street: user.address.street,
                number: user.address.number,
                complement: user.address.complement,
                district: user.address.district,
                city: user.address.city,
                state: user.address.state,
                zipCode: user.address.zipCode,
              },
            },
            contact: {
              create: {
                phone: user.contact.phone,
                whatsapp: user.contact.whatsapp,
                email: user.contact.email,
                facebook: user.contact.facebook,
                instagram: user.contact.instagram,
              },
            },
          },
        },
      },
    });

    return develop;
  }

  async find_many(): Promise<DevelopEntity[]> {
    return await this.baseService.find_many();
  }

  async find_unique(id: string): Promise<DevelopEntity> {
    return await this.baseService.find_unique(id);
  }

  async edit(id: string, updateDevelopDto: UpdateDevelopDto): Promise<DevelopEntity> {
    return await this.baseService.edit(id, updateDevelopDto);
  }

  async remove(id: string): Promise<Boolean> {
    return await this.baseService.remove(id);
  }
}
