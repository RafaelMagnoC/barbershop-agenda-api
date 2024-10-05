import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceptionistService } from './receptionist.service';
import { CreateReceptionistDto } from './dto/create-receptionist.dto';
import { UpdateReceptionistDto } from './dto/update-receptionist.dto';
import { ApiTags } from '@nestjs/swagger';
import { ReceptionistEntity } from './entities/receptionist.entity';

@ApiTags('receptionist')
@Controller('receptionist')
export class ReceptionistController {
  constructor(private readonly receptionistService: ReceptionistService) {}

  @Post()
  async create(@Body() createReceptionistDto: CreateReceptionistDto): Promise<ReceptionistEntity> {
    return await this.receptionistService.create(createReceptionistDto);
  }

  @Get()
  async find_many(): Promise<ReceptionistEntity[]> {
    return await this.receptionistService.find_many();
  }

  @Get(':id')
  async find_unique(@Param('id') id: string): Promise<ReceptionistEntity> {
    return await this.receptionistService.find_unique(id);
  }

  @Patch(':id')
  async edit(@Param('id') id: string, @Body() updateReceptionistDto: UpdateReceptionistDto): Promise<ReceptionistEntity> {
    return await this.receptionistService.edit(id, updateReceptionistDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Boolean> {
    return await this.receptionistService.remove(id);
  }
}
