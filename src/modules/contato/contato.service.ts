import { Injectable } from '@nestjs/common';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { Contato } from './entities/contato.entity';
import { PrismaService } from '../../config/database/prisma.service';

@Injectable()
export class ContatoService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createContatoDto: CreateContatoDto): Promise<CreateContatoDto> {
    const contact: Contato = await this.prisma.contact.create({
      data: createContatoDto,
    });

    return contact;
  }

  async findAll(): Promise<Contato[]> {
    const contacts: Contato[] = await this.prisma.contact.findMany();

    return contacts;
  }

  async findOne(id: string): Promise<Contato> {
    const contact: Contato = await this.prisma.contact.findUnique({
      where: { id: id },
    });

    return contact;
  }

  async update(id: string, updateContatoDto: UpdateContatoDto): Promise<Contato> {
    const contact_exists: Contato = await this.exists(id);

    if (!contact_exists) {
      return null;
    }

    const contact: Contato = await this.prisma.contact.update({
      where: { id: contact_exists.id },
      data: updateContatoDto,
    });

    return contact;
  }

  async remove(id: string): Promise<Boolean> {
    const contact_exists: Contato = await this.exists(id);

    const contact_removed: Contato = await this.prisma.contact.delete({ where: { id: contact_exists.id } });

    return contact_removed ? true : false;
  }

  async exists(id: string): Promise<Contato> {
    const contact_exists: Contato = await this.prisma.contact.findUnique({
      where: {
        id: id,
      },
    });

    if (!contact_exists) {
      return null;
    }

    return contact_exists;
  }
}
