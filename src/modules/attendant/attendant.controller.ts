import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttendantService } from './attendant.service';
import { CreateAttendantDto } from './dto/create-attendant.dto';
import { UpdateAttendantDto } from './dto/update-attendant.dto';
import { AttendantEntity } from './entities/attendant.entity';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('attendant')
@Controller('attendant')
export class AttendantController {
  constructor(private readonly attendantService: AttendantService) {}

  @ApiOperation({ summary: 'Cria um novo atendente' })
  @ApiBody({ type: CreateAttendantDto })
  @ApiResponse({
    status: 201,
    description: 'Atendente criado com sucesso',
    type: AttendantEntity,
  })
  @Post()
  async create(@Body() createAttendantDto: CreateAttendantDto): Promise<AttendantEntity> {
    return await this.attendantService.create(createAttendantDto);
  }

  @ApiOperation({ summary: 'Retorna lista de todos atendentes' })
  @ApiResponse({
    status: 200,
    description: 'Lista de atendentes',
    type: [AttendantEntity],
  })
  @ApiResponse({ status: 404, description: 'atendentes não encontrados' })
  @Get()
  async find_many(): Promise<AttendantEntity[]> {
    return await this.attendantService.find_many();
  }

  @ApiOperation({ summary: 'Retorna um atendente solicitado por ID' })
  @ApiParam({ name: 'id', type: String, description: 'atendente ID' })
  @ApiResponse({
    status: 200,
    description: 'atendente encontrado',
    type: AttendantEntity,
  })
  @ApiResponse({ status: 404, description: 'atendente não encontrado' })
  @Get(':id')
  async find_unique(@Param('id') id: string): Promise<AttendantEntity> {
    return this.attendantService.find_unique(id);
  }

  @ApiOperation({ summary: 'Atualiza um atendente pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'atendente ID' })
  @ApiBody({ type: () => UpdateAttendantDto })
  @ApiResponse({
    status: 200,
    description: 'atendente atualizado com sucesso',
    type: AttendantEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'atendente não encontrado' })
  @Patch(':id')
  async edit(@Param('id') id: string, @Body() updateAttendantDto: UpdateAttendantDto): Promise<AttendantEntity> {
    return await this.attendantService.edit(id, updateAttendantDto);
  }

  @ApiOperation({ summary: 'Exclui um atendente pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'administrador ID' })
  @ApiResponse({
    status: 200,
    description: 'atendente excluído com sucesso',
  })
  @ApiResponse({ status: 404, description: 'atendente não encontrado' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Boolean> {
    return await this.attendantService.remove(id);
  }
}
