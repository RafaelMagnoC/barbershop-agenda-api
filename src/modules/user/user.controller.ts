import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { instanceToPlain, plainToInstance } from 'class-transformer';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'Usuário criado com sucesso',
    type: CreateUserDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return await this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna lista de todos usuários' })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários',
    type: [UserEntity],
  })
  @ApiResponse({ status: 404, description: 'Usuários não encontrados' })
  async find_many(): Promise<UserEntity[]> {
    const users: UserEntity[] = await this.userService.find_many();
    return plainToInstance(UserEntity, users);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um usuário solicitado por ID' })
  @ApiParam({ name: 'id', type: String, description: 'Usuario ID' })
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado',
    type: UserEntity,
  })
  @ApiResponse({ status: 404, description: 'Usuario não encontrado' })
  async find_unique(@Param('id') id: string): Promise<UserEntity> {
    return await this.userService.find_unique(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um usuário pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'Usuário ID' })
  @ApiBody({ type: () => UpdateUserDto })
  @ApiResponse({
    status: 200,
    description: 'Usuário atualizado com sucesso',
    type: UserEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async edit(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return await this.userService.edit(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Exclui um usuário pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'Usuário ID' })
  @ApiResponse({
    status: 200,
    description: 'Usuário excluído com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async remove(@Param('id') id: string): Promise<Boolean> {
    return await this.userService.remove(id);
  }
}
