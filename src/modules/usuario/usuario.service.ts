import { Inject, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { CreateContatoDto } from '../contato/dto/create-contato.dto';

@Injectable()
export class UsuarioService {

  /**
   * Cria um novo usuário.
   * @param createUsuarioDto - Dados para criar um usuário.
   * @returns O usuário criado.
   */
  async create(createUsuarioDto: CreateUsuarioDto) {
  }


  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
