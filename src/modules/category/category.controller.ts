import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryEntity } from './entities/category.entity';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({ summary: 'Cria uma nova categoria' })
  @ApiBody({ type: CreateCategoryDto })
  @ApiResponse({
    status: 201,
    description: 'Categoria criada com sucesso',
    type: CreateCategoryDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    return this.categoryService.create(createCategoryDto);
  }

  @ApiOperation({ summary: 'Retorna lista de todas categorias' })
  @ApiResponse({
    status: 200,
    description: 'Lista de categorias',
    type: [CategoryEntity],
  })
  @ApiResponse({ status: 404, description: 'Categorias não encontradas' })
  @Get()
  async find_many(): Promise<CategoryEntity[]> {
    return this.categoryService.find_many();
  }

  @ApiOperation({ summary: 'Retorna uma categoria solicitada por ID' })
  @ApiParam({ name: 'id', type: String, description: 'Categoria ID' })
  @ApiResponse({
    status: 200,
    description: 'Categoria encontrada',
    type: CategoryEntity,
  })
  @ApiResponse({ status: 404, description: 'Categoria não encontrada' })
  @Get(':id')
  async find_unique(@Param('id') id: string): Promise<CategoryEntity> {
    return this.categoryService.find_unique(id);
  }

  @ApiOperation({ summary: 'Atualiza uma categoria pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'Categoria ID' })
  @ApiBody({ type: () => UpdateCategoryDto })
  @ApiResponse({
    status: 200,
    description: 'Categoria atualizada com sucesso',
    type: CategoryEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Categoria não encontrada' })
  @Patch(':id')
  async edit(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
    return this.categoryService.edit(id, updateCategoryDto);
  }

  @ApiOperation({ summary: 'Exclui uma categoria pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'Categoria ID' })
  @ApiResponse({
    status: 200,
    description: 'Categoria excluída com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Categoria não encontrada' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Boolean> {
    return this.categoryService.remove(id);
  }
}
