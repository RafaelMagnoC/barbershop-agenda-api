import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseService } from '@base/base.service';
import { UserEntity } from './entities/user.entity';
import { PrismaService } from '@prismaService/prisma.service';

@Injectable()
export class UserService {
  private readonly baseService: BaseService<UserEntity, CreateUserDto, UpdateUserDto>;

  constructor(readonly prisma: PrismaService) {
    this.baseService = new BaseService<UserEntity, CreateUserDto, UpdateUserDto>(prisma, 'user');
  }

  /**
   * Cria um novo usuário.
   * @param createUserDto - Dados para criar um usuário.
   * @returns O usuário criado.
   */
  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { address, contact, name, birthday, gender, username, is_active } = createUserDto;

    const user: UserEntity = await this.prisma.user.create({
      data: {
        name: name,
        username: username,
        birthday: birthday,
        gender: gender,
        is_active: is_active,
        address: {
          create: address,
        },
        contact: {
          create: contact,
        },
      },
    });

    return user;
  }

  async find_many(): Promise<UserEntity[]> {
    return await this.baseService.find_many();
  }

  async find_unique(id: string): Promise<UserEntity> {
    return await this.baseService.find_unique(id);
  }

  async edit(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return await this.baseService.edit(id, updateUserDto);
  }

  async remove(id: string): Promise<Boolean> {
    return await this.baseService.remove(id);
  }
}
