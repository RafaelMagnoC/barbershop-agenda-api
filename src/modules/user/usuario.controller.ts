import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@ApiTags('usuario')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiBody({ type: CreateUsuarioDto })
  @ApiResponse({
    status: 201,
    description: 'Usuário criado com sucesso',
    type: CreateUsuarioDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna lista de todos usuários' })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários',
    type: [CreateUsuarioDto],
  })
  @ApiResponse({ status: 404, description: 'Usuários não encontrados' })
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um usuário solicitado por ID' })
  @ApiParam({ name: 'id', type: String, description: 'Usuario ID' })
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado',
    type: CreateUsuarioDto,
  })
  @ApiResponse({ status: 404, description: 'Usuario não encontrado' })
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um usuário pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'Usuário ID' })
  @ApiBody({ type: () => UpdateUsuarioDto })
  @ApiResponse({
    status: 200,
    description: 'Usuário atualizado com sucesso',
    type: UpdateUsuarioDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Exclui um usuário pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'Usuário ID' })
  @ApiResponse({
    status: 200,
    description: 'Usuário excluído com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
