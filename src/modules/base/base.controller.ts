import { Body, Param, HttpException, NotFoundException, BadRequestException } from '@nestjs/common';

export class BaseController<Entity, CreateDTO, UpdateDTO> {
  constructor(private readonly service: string) {}

  async create(@Body() createDTO: CreateDTO): Promise<Entity> {
    try {
      return await this[this.service].create(createDTO);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      }
      throw new HttpException('Internal server error', 500);
    }
  }

  async find_many(): Promise<Entity[]> {
    try {
      return await this[this.service].findAll();
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw new HttpException('Internal server error', 500);
    }
  }

  async find_unique(@Param('id') id: string): Promise<Entity> {
    try {
      return await this[this.service].findOne(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw new HttpException('Internal server error', 500);
    }
  }

  async edit(@Param('id') id: string, @Body() updateContatoDto: UpdateDTO) {
    try {
      return await this[this.service].update(id, updateContatoDto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      }
      throw new HttpException('Internal server error', 500);
    }
  }

  async remove(@Param('id') id: string) {
    try {
      const result = await this[this.service].remove(id);
      if (!result) {
        throw new NotFoundException(`objeto com ID ${id} não encontrado`);
      }
      return;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw new HttpException('Internal server error', 500);
    }
  }
}
