import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('contact')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo contato' })
  @ApiBody({ type: CreateContactDto })
  @ApiResponse({
    status: 201,
    description: 'Contato criado com sucesso',
    type: CreateContactDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  @Get()
  contacts() {
    return this.contactService.find_many();
  }

  @Get(':id')
  contact(@Param('id') id: string) {
    return this.contactService.find_unique(id);
  }

  @Patch(':id')
  edit(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.edit(id, updateContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactService.remove(id);
  }
}
