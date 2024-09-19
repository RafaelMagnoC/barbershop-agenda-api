import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('address')
@Controller('address')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo endereco' })
  @ApiBody({ type: CreateEnderecoDto })
  @ApiResponse({
    status: 201,
    description: 'Endereco criado com sucesso',
    type: CreateEnderecoDto,
  })
  create(@Body() createEnderecoDto: CreateEnderecoDto) {
    return this.enderecoService.create(createEnderecoDto);
  }

  @Get()
  addresses() {
    return this.enderecoService.find_many();
  }

  @Get(':id')
  address(@Param('id') id: string) {
    return this.enderecoService.find_unique(id);
  }

  @Patch(':id')
  edit(@Param('id') id: string, @Body() updateEnderecoDto: UpdateEnderecoDto) {
    return this.enderecoService.edit(id, updateEnderecoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enderecoService.remove(id);
  }
}
