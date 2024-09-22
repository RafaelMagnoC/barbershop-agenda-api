import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdministratorEntity } from './entities/administrator.entity';

@ApiTags('administrator')
@Controller('administrator')
export class AdministratorController {
  constructor(private readonly administratorService: AdministratorService) {}

  @ApiOperation({ summary: 'Cria um novo administrador' })
  @ApiBody({ type: CreateAdministratorDto })
  @ApiResponse({
    status: 201,
    description: 'Administrador criado com sucesso',
    type: CreateAdministratorDto,
  })
  @Post()
  async create(@Body() createAdministratorDto: CreateAdministratorDto) {
    return this.administratorService.create(createAdministratorDto);
  }

  @ApiOperation({ summary: 'Retorna lista de todos administradores' })
  @ApiResponse({
    status: 200,
    description: 'Lista de administradores',
    type: [AdministratorEntity],
  })
  @ApiResponse({ status: 404, description: 'administradores não encontrados' })
  @Get()
  async find_many(): Promise<AdministratorEntity[]> {
    return await this.administratorService.find_many();
  }

  @ApiOperation({ summary: 'Retorna um administrador solicitado por ID' })
  @ApiParam({ name: 'id', type: String, description: 'administrador ID' })
  @ApiResponse({
    status: 200,
    description: 'administrador encontrado',
    type: AdministratorEntity,
  })
  @ApiResponse({ status: 404, description: 'administrador não encontrado' })
  @Get(':id')
  async find_unique(@Param('id') id: string): Promise<AdministratorEntity> {
    return await this.administratorService.find_unique(id);
  }

  @ApiOperation({ summary: 'Atualiza um administrador pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'administrador ID' })
  @ApiBody({ type: () => UpdateAdministratorDto })
  @ApiResponse({
    status: 200,
    description: 'administrador atualizado com sucesso',
    type: AdministratorEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'administrador não encontrado' })
  @Patch(':id')
  async edit(@Param('id') id: string, @Body() updateAdministratorDto: UpdateAdministratorDto): Promise<AdministratorEntity> {
    return await this.administratorService.edit(id, updateAdministratorDto);
  }

  @ApiOperation({ summary: 'Exclui um administrador pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'administrador ID' })
  @ApiResponse({
    status: 200,
    description: 'administrador excluído com sucesso',
  })
  @ApiResponse({ status: 404, description: 'administrador não encontrado' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Boolean> {
    return await this.administratorService.remove(id);
  }
}
