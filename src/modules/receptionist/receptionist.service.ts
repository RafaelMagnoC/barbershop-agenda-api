import { Injectable } from '@nestjs/common';
import { CreateReceptionistDto } from './dto/create-receptionist.dto';
import { UpdateReceptionistDto } from './dto/update-receptionist.dto';
import { ReceptionistEntity } from './entities/receptionist.entity';
import { BaseService } from '../base/base.service';
import { PrismaService } from '@prismaService/prisma.service';

@Injectable()
export class ReceptionistService {
  private readonly baseService: BaseService<ReceptionistEntity, CreateReceptionistDto, UpdateReceptionistDto>;
  constructor(readonly prisma: PrismaService) {
    this.baseService = new BaseService<ReceptionistEntity, CreateReceptionistDto, UpdateReceptionistDto>(prisma, 'receptionist');
  }
  async create(createReceptionistDto: CreateReceptionistDto): Promise<ReceptionistEntity> {
    const { user } = createReceptionistDto;

    const receptionist: ReceptionistEntity = await this.prisma.receptionist.create({
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

    return receptionist;
  }

  async find_many(): Promise<ReceptionistEntity[]> {
    return await this.baseService.find_many();
  }

  async find_unique(id: string): Promise<ReceptionistEntity> {
    return await this.baseService.find_unique(id);
  }

  async edit(id: string, updateDevelopDto: UpdateReceptionistDto): Promise<ReceptionistEntity> {
    return await this.baseService.edit(id, updateDevelopDto);
  }

  async remove(id: string): Promise<Boolean> {
    return await this.baseService.remove(id);
  }
}
