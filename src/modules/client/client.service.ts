import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from '@prismaService/prisma.service';
import { BaseService } from '../base/base.service';
import { ClientEntity } from './entities/client.entity';

@Injectable()
export class ClientService {
  private readonly baseService: BaseService<ClientEntity, CreateClientDto, UpdateClientDto>;
  constructor(readonly prisma: PrismaService) {
    this.baseService = new BaseService<ClientEntity, CreateClientDto, UpdateClientDto>(prisma, 'client');
  }
  async create(createClientDto: CreateClientDto): Promise<ClientEntity> {
    const { user } = createClientDto;

    const client: ClientEntity = await this.prisma.client.create({
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

    return client;
  }

  async find_many(): Promise<ClientEntity[]> {
    return await this.baseService.find_many();
  }

  async find_unique(id: string): Promise<ClientEntity> {
    return await this.baseService.find_unique(id);
  }

  async edit(id: string, updateClientDto: UpdateClientDto): Promise<ClientEntity> {
    return await this.baseService.edit(id, updateClientDto);
  }

  async remove(id: string): Promise<Boolean> {
    return await this.baseService.remove(id);
  }
}
