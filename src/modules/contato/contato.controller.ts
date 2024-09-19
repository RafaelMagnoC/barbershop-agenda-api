import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContatoService } from './contato.service';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('contact')
@Controller('contact')
export class ContatoController {
  constructor(private readonly contatoService: ContatoService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo contato' })
  @ApiBody({ type: CreateContatoDto })
  @ApiResponse({
    status: 201,
    description: 'Contato criado com sucesso',
    type: CreateContatoDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createContatoDto: CreateContatoDto) {
    return this.contatoService.create(createContatoDto);
  }

  @Get()
  contacts() {
    return this.contatoService.find_many();
  }

  @Get(':id')
  contact(@Param('id') id: string) {
    return this.contatoService.find_unique(id);
  }

  @Patch(':id')
  edit(@Param('id') id: string, @Body() updateContatoDto: UpdateContatoDto) {
    return this.contatoService.edit(id, updateContatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contatoService.remove(id);
  }
}
