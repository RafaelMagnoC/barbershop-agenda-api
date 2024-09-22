import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';
import { BaseService } from '@base/base.service';
import { PrismaService } from '@src/config/database/prisma.service';

@Injectable()
export class CategoryService {
  private readonly baseService: BaseService<CategoryEntity, CreateCategoryDto, UpdateCategoryDto>;

  constructor(readonly prisma: PrismaService) {
    this.baseService = new BaseService<CategoryEntity, CreateCategoryDto, UpdateCategoryDto>(prisma, 'category');
  }
  async create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    return await this.baseService.create(createCategoryDto);
  }

  async find_many(): Promise<CategoryEntity[]> {
    return await this.baseService.find_many();
  }

  async find_unique(id: string): Promise<CategoryEntity> {
    return await this.baseService.find_unique(id);
  }

  async edit(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
    return await this.baseService.edit(id, updateCategoryDto);
  }

  async remove(id: string): Promise<Boolean> {
    return await this.baseService.remove(id);
  }
}
