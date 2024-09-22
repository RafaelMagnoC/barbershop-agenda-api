import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceEntity } from './entities/service.entity';

@ApiTags('service')
@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @ApiOperation({ summary: 'Cria um novo serviço' })
  @ApiBody({ type: CreateServiceDto })
  @ApiResponse({
    status: 201,
    description: 'Serviço criado com sucesso',
    type: CreateServiceDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  async create(@Body() createServiceDto: CreateServiceDto): Promise<ServiceEntity> {
    return await this.serviceService.create(createServiceDto);
  }

  @ApiOperation({ summary: 'Retorna lista de todos serviços' })
  @ApiResponse({
    status: 200,
    description: 'Lista de serviços',
    type: [ServiceEntity],
  })
  @ApiResponse({ status: 404, description: 'Serviços não encontrados' })
  @Get()
  async find_many(): Promise<ServiceEntity[]> {
    return await this.serviceService.find_many();
  }

  @ApiOperation({ summary: 'Retorna um serviço solicitado por ID' })
  @ApiParam({ name: 'id', type: String, description: 'Serviço ID' })
  @ApiResponse({
    status: 200,
    description: 'Serviço encontrado',
    type: ServiceEntity,
  })
  @ApiResponse({ status: 404, description: 'Serviço não encontrado' })
  @Get(':id')
  async find_unique(@Param('id') id: string): Promise<ServiceEntity> {
    return await this.serviceService.find_unique(id);
  }

  @ApiOperation({ summary: 'Atualiza um serviço pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'Serviço ID' })
  @ApiBody({ type: () => UpdateServiceDto })
  @ApiResponse({
    status: 200,
    description: 'Serviço atualizado com sucesso',
    type: ServiceEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Serviço não encontrado' })
  @Patch(':id')
  async edit(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto): Promise<ServiceEntity> {
    return await this.serviceService.edit(id, updateServiceDto);
  }

  @ApiOperation({ summary: 'Exclui um serviço pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'Serviço ID' })
  @ApiResponse({
    status: 200,
    description: 'Serviço excluído com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Serviçó não encontrado' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Boolean> {
    return await this.serviceService.remove(id);
  }
}
