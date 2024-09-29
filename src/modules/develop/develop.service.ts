import { Injectable } from '@nestjs/common';
import { CreateDevelopDto } from './dto/create-develop.dto';
import { UpdateDevelopDto } from './dto/update-develop.dto';

@Injectable()
export class DevelopService {
  create(createDevelopDto: CreateDevelopDto) {
    return 'This action adds a new develop';
  }

  findAll() {
    return `This action returns all develop`;
  }

  findOne(id: number) {
    return `This action returns a #${id} develop`;
  }

  update(id: number, updateDevelopDto: UpdateDevelopDto) {
    return `This action updates a #${id} develop`;
  }

  remove(id: number) {
    return `This action removes a #${id} develop`;
  }
}
