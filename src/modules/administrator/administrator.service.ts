import { Injectable } from '@nestjs/common';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { BaseService } from '@base/base.service';
import { AdministratorEntity } from './entities/administrator.entity';
import { PrismaService } from '@prismaService/prisma.service';

@Injectable()
export class AdministratorService {
  private readonly baseService: BaseService<AdministratorEntity, CreateAdministratorDto, UpdateAdministratorDto>;
  constructor(readonly prisma: PrismaService) {
    this.baseService = new BaseService<AdministratorEntity, CreateAdministratorDto, UpdateAdministratorDto>(prisma, 'administrator');
  }
  async create(createAdministratorDto: CreateAdministratorDto): Promise<AdministratorEntity> {
    const { user } = createAdministratorDto;

    const administrator: AdministratorEntity = await this.prisma.administrator.create({
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

    return administrator;
  }

  async find_many(): Promise<AdministratorEntity[]> {
    return await this.baseService.find_many();
  }

  async find_unique(id: string): Promise<AdministratorEntity> {
    return await this.baseService.find_unique(id);
  }

  async edit(id: string, updateAdministratorDto: UpdateAdministratorDto): Promise<AdministratorEntity> {
    return await this.baseService.edit(id, updateAdministratorDto);
  }

  async remove(id: string): Promise<Boolean> {
    return await this.baseService.remove(id);
  }
}
