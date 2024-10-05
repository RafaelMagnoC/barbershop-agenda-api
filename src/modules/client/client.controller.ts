import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ApiTags } from '@nestjs/swagger';
import { ClientEntity } from './entities/client.entity';

@ApiTags('client')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto): Promise<ClientEntity> {
    return await this.clientService.create(createClientDto);
  }

  @Get()
  async find_many(): Promise<ClientEntity[]> {
    return await this.clientService.find_many();
  }

  @Get(':id')
  async find_unique(@Param('id') id: string): Promise<ClientEntity> {
    return await this.clientService.find_unique(id);
  }

  @Patch(':id')
  async edit(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto): Promise<ClientEntity> {
    return await this.clientService.edit(id, updateClientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Boolean> {
    return await this.clientService.remove(id);
  }
}
