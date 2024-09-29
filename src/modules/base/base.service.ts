import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prismaService/prisma.service';

@Injectable()
export class BaseService<Entity, CreateDTO, UpdateDTO> {
  constructor(
    private readonly prisma: PrismaService,
    private readonly model: string
  ) {
    if (!model) {
      throw new Error('O nome do modelo deve ser fornecido.');
    }
  }
  async create(createDTO: CreateDTO): Promise<Entity> {
    try {
      const object: Entity = await this.prisma[this.model].create({
        data: createDTO,
      });

      return object;
    } catch (erro) {
      console.log(erro);
    }
  }

  async find_many(): Promise<Entity[]> {
    try {
      const object: Entity[] = await this.prisma[this.model].findMany();

      return object;
    } catch (erro) {
      console.log(erro);
    }
  }

  async find_unique(id: string | number): Promise<Entity> {
    try {
      const object: Entity = await this.prisma[this.model].findUnique({
        where: { id: id },
      });

      return object;
    } catch (erro) {
      console.log(erro);
    }
  }

  async edit(id: string | number, updateDTO: UpdateDTO): Promise<Entity> {
    try {
      const object_exists: Entity = await this.exists(id);

      if (!object_exists) {
        return null;
      }

      const object: Entity = await this.prisma[this.model].update({
        where: { id: id },
        data: updateDTO,
      });

      return object;
    } catch (erro) {
      console.log(erro);
    }
  }

  async remove(id: string | number): Promise<Boolean> {
    try {
      const object_exists: Entity = await this.exists(id);

      if (!object_exists) {
        return null;
      }

      const object_removed: Entity = await this.prisma[this.model].delete({ where: { id: id } });

      return object_removed ? true : false;
    } catch (erro) {
      console.log(erro);
    }
  }

  async exists(id: string | number): Promise<Entity> {
    try {
      const object_exists: Entity = await this.prisma[this.model].findUnique({
        where: {
          id: id,
        },
      });

      if (!object_exists) {
        return null;
      }

      return object_exists;
    } catch (erro) {
      console.log(erro);
    }
  }
}
