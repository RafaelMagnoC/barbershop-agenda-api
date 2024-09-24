import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClubService } from './club.service';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClubEntity } from './entities/club.entity';

@ApiTags('club')
@Controller('club')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @ApiOperation({ summary: 'Cria um novo clube' })
  @ApiBody({ type: CreateClubDto })
  @ApiResponse({
    status: 201,
    description: 'clube criado com sucesso',
    type: ClubEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  async reate(@Body() createClubDto: CreateClubDto): Promise<ClubEntity> {
    return await this.clubService.create(createClubDto);
  }

  @ApiOperation({ summary: 'Retorna lista de todos os clubes' })
  @ApiResponse({
    status: 200,
    description: 'Lista de clubes',
    type: [ClubEntity],
  })
  @ApiResponse({ status: 404, description: 'clubes não encontrados' })
  @Get()
  async find_many(): Promise<ClubEntity[]> {
    return await this.clubService.find_many();
  }

  @ApiOperation({ summary: 'Retorna um clube solicitado por ID' })
  @ApiParam({ name: 'id', type: String, description: 'clube ID' })
  @ApiResponse({
    status: 200,
    description: 'clube encontrado',
    type: ClubEntity,
  })
  @ApiResponse({ status: 404, description: 'clube não encontrado' })
  @Get(':id')
  async find_unique(@Param('id') id: string): Promise<ClubEntity> {
    return await this.clubService.find_unique(id);
  }

  @ApiOperation({ summary: 'atualiza um clube pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'clube ID' })
  @ApiBody({ type: () => UpdateClubDto })
  @ApiResponse({
    status: 200,
    description: 'clube atualizado com sucesso',
    type: ClubEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'clube não encontrado' })
  @Patch(':id')
  async edit(@Param('id') id: string, @Body() updateClubDto: UpdateClubDto): Promise<ClubEntity> {
    return await this.clubService.edit(id, updateClubDto);
  }

  @ApiOperation({ summary: 'Exclui um clube pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'clube ID' })
  @ApiResponse({
    status: 200,
    description: 'clube excluído com sucesso',
  })
  @ApiResponse({ status: 404, description: 'clube não encontrado' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Boolean> {
    return await this.clubService.remove(id);
  }
}
