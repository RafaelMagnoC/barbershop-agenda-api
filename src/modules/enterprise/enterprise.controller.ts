import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnterpriseService } from './enterprise.service';
import { CreateEnterpriseDto } from './dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from './dto/update-enterprise.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EnterpriseEntity } from './entities/enterprise.entity';

@ApiTags('enterprise')
@Controller('enterprise')
export class EnterpriseController {
  constructor(private readonly enterpriseService: EnterpriseService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiBody({ type: CreateEnterpriseDto })
  @ApiResponse({
    status: 201,
    description: 'Empresa criado com sucesso',
    type: CreateEnterpriseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createEnterpriseDto: CreateEnterpriseDto): Promise<EnterpriseEntity> {
    return this.enterpriseService.create(createEnterpriseDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna lista de todas empresas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de Empresas',
    type: [EnterpriseEntity],
  })
  @ApiResponse({ status: 404, description: 'Empresas não encontradas' })
  @Get()
  find_many(): Promise<EnterpriseEntity[]> {
    return this.enterpriseService.find_many();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna uma empresa solicitada por ID' })
  @ApiParam({ name: 'id', type: String, description: 'Empresa ID' })
  @ApiResponse({
    status: 200,
    description: 'Empresa encontrada',
    type: EnterpriseEntity,
  })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada' })
  @Get(':id')
  find_unique(@Param('id') id: string): Promise<EnterpriseEntity> {
    return this.enterpriseService.find_unique(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza uma empresa pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'Empresa ID' })
  @ApiBody({ type: () => UpdateEnterpriseDto })
  @ApiResponse({
    status: 200,
    description: 'Empresa atualizada com sucesso',
    type: EnterpriseEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada' })
  @Patch(':id')
  edit(@Param('id') id: string, @Body() updateEnterpriseDto: UpdateEnterpriseDto): Promise<EnterpriseEntity> {
    return this.enterpriseService.edit(id, updateEnterpriseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Exclui uma empresa pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'Empresa ID' })
  @ApiResponse({
    status: 200,
    description: 'Empresa excluída com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada' })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Boolean> {
    return this.enterpriseService.remove(id);
  }
}
