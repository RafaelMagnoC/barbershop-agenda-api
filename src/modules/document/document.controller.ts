import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentService } from './document.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { ApiTags } from '@nestjs/swagger';
import { DocumentEntity } from './entities/document.entity';

@ApiTags('document')
@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  async create(@Body() createDocumentDto: CreateDocumentDto): Promise<DocumentEntity> {
    return await this.documentService.create(createDocumentDto);
  }

  @Get()
  async find_many(): Promise<DocumentEntity[]> {
    return await this.documentService.find_many();
  }

  @Get(':id')
  async find_unique(@Param('id') id: string) {
    return await this.documentService.find_unique(id);
  }

  @Patch(':id')
  async edit(@Param('id') id: string, @Body() updateDocumentDto: UpdateDocumentDto) {
    return this.documentService.edit(id, updateDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentService.remove(id);
  }
}
