import { Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { BaseService } from '@base/base.service';
import { DocumentEntity } from './entities/document.entity';
import { PrismaService } from '@src/config/database/prisma.service';

@Injectable()
export class DocumentService {
  private readonly baseService: BaseService<DocumentEntity, CreateDocumentDto, UpdateDocumentDto>;

  constructor(readonly prisma: PrismaService) {
    this.baseService = new BaseService<DocumentEntity, CreateDocumentDto, UpdateDocumentDto>(prisma, 'document');
  }

  async create(createDocumentDto: CreateDocumentDto): Promise<DocumentEntity> {
    return await this.baseService.create(createDocumentDto);
  }

  async find_many(): Promise<DocumentEntity[]> {
    return await this.baseService.find_many();
  }

  async find_unique(id: string): Promise<DocumentEntity> {
    return await this.baseService.find_unique(id);
  }

  async edit(id: string, updateDocumentDto: UpdateDocumentDto): Promise<DocumentEntity> {
    return await this.baseService.edit(id, updateDocumentDto);
  }

  async remove(id: string): Promise<Boolean> {
    return await this.baseService.remove(id);
  }
}
