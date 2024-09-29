import { Injectable } from '@nestjs/common';
import { CreateAttendantDto } from './dto/create-attendant.dto';
import { UpdateAttendantDto } from './dto/update-attendant.dto';
import { BaseService } from '@base/base.service';
import { AttendantEntity } from './entities/attendant.entity';
import { PrismaService } from '@prismaService/prisma.service';

@Injectable()
export class AttendantService {
  private readonly baseService: BaseService<AttendantEntity, CreateAttendantDto, UpdateAttendantDto>;

  constructor(readonly prisma: PrismaService) {
    this.baseService = new BaseService<AttendantEntity, CreateAttendantDto, UpdateAttendantDto>(prisma, 'attendant');
  }
  async create(createAttendantDto: CreateAttendantDto): Promise<AttendantEntity> {
    const { user } = createAttendantDto;

    const attendant: AttendantEntity = await this.prisma.attendant.create({
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

    return attendant;
  }

  async find_many(): Promise<AttendantEntity[]> {
    return await this.baseService.find_many();
  }

  async find_unique(id: string): Promise<AttendantEntity> {
    return await this.baseService.find_unique(id);
  }

  async edit(id: string, updateAdministratorDto: UpdateAttendantDto): Promise<AttendantEntity> {
    return await this.baseService.edit(id, updateAdministratorDto);
  }

  async remove(id: string): Promise<Boolean> {
    return await this.baseService.remove(id);
  }
}
