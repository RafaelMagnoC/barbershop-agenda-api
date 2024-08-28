import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const pessoa: any = {
      id: 1,
      nome: 'Fernando Magno',
      idade: 27,
      genero: 'M',
    };

    return `O que você está pensando, ${pessoa.nome}`;
  }
}
