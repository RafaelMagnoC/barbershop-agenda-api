import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactEntity } from './entities/contact.entity';
import { PrismaService } from '@prismaService/prisma.service';
import { BaseService } from '@base/base.service';

@Injectable()
export class ContactService {
  private readonly baseService: BaseService<ContactEntity, CreateContactDto, UpdateContactDto>;

  constructor(readonly prisma: PrismaService) {
    this.baseService = new BaseService<ContactEntity, CreateContactDto, UpdateContactDto>(prisma, 'contact');
  }
  async create(createContactDto: CreateContactDto): Promise<CreateContactDto> {
    return await this.baseService.create(createContactDto);
  }

  async find_many(): Promise<ContactEntity[]> {
    return await this.baseService.find_many();
  }

  async find_unique(id: string): Promise<ContactEntity> {
    return await this.baseService.find_unique(id);
  }

  async edit(id: string, updateContactDto: UpdateContactDto): Promise<ContactEntity> {
    return await this.baseService.edit(id, updateContactDto);
  }

  async remove(id: string): Promise<Boolean> {
    return await this.baseService.remove(id);
  }

  async exists(id: string): Promise<ContactEntity> {
    return await this.baseService.exists(id);
  }
}
