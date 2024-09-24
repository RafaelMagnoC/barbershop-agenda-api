import { Injectable } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { PrismaService } from '@prismaService/prisma.service';
import { ClubEntity } from './entities/club.entity';
import { BaseService } from '@base/base.service';

@Injectable()
export class ClubService {
  private readonly baseService: BaseService<ClubEntity, CreateClubDto, UpdateClubDto>;

  constructor(readonly prisma: PrismaService) {
    this.baseService = new BaseService<ClubEntity, CreateClubDto, UpdateClubDto>(prisma, 'club');
  }
  async create(createClubDto: CreateClubDto): Promise<ClubEntity> {
    return await this.baseService.create(createClubDto);
  }

  async find_many(): Promise<ClubEntity[]> {
    return await this.baseService.find_many();
  }

  async find_unique(id: string): Promise<ClubEntity> {
    return await this.baseService.find_unique(id);
  }

  async edit(id: string, updateClubDto: UpdateClubDto): Promise<ClubEntity> {
    return await this.baseService.edit(id, updateClubDto);
  }

  async remove(id: string): Promise<Boolean> {
    return await this.baseService.remove(id);
  }
}
