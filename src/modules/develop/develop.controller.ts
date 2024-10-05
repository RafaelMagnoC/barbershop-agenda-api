import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevelopService } from './develop.service';
import { CreateDevelopDto } from './dto/create-develop.dto';
import { UpdateDevelopDto } from './dto/update-develop.dto';
import { ApiTags } from '@nestjs/swagger';
import { DevelopEntity } from './entities/develop.entity';

@ApiTags('develop')
@Controller('develop')
export class DevelopController {
  constructor(private readonly developService: DevelopService) {}

  @Post()
  async create(@Body() createDevelopDto: CreateDevelopDto): Promise<DevelopEntity> {
    return await this.developService.create(createDevelopDto);
  }

  @Get()
  async find_many(): Promise<DevelopEntity[]> {
    return await this.developService.find_many();
  }

  @Get(':id')
  async find_unique(@Param('id') id: string): Promise<DevelopEntity> {
    return await this.developService.find_unique(id);
  }

  @Patch(':id')
  async edit(@Param('id') id: string, @Body() updateDevelopDto: UpdateDevelopDto): Promise<DevelopEntity> {
    return await this.developService.edit(id, updateDevelopDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Boolean> {
    return await this.developService.remove(id);
  }
}
