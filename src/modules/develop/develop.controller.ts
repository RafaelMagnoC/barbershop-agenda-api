import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevelopService } from './develop.service';
import { CreateDevelopDto } from './dto/create-develop.dto';
import { UpdateDevelopDto } from './dto/update-develop.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('develop')
@Controller('develop')
export class DevelopController {
  constructor(private readonly developService: DevelopService) {}

  @Post()
  create(@Body() createDevelopDto: CreateDevelopDto) {
    return this.developService.create(createDevelopDto);
  }

  @Get()
  findAll() {
    return this.developService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.developService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDevelopDto: UpdateDevelopDto) {
    return this.developService.update(+id, updateDevelopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.developService.remove(+id);
  }
}
