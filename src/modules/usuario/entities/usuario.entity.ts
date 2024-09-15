import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsOptional,
  IsString,
  Matches,
  ValidateIf,
} from 'class-validator';
import { Genero } from 'src/enums/genero.enum';
import { Contato } from 'src/modules/contato/entities/contato.entity';
import { Endereco } from 'src/modules/endereco/entities/endereco.entity';
export class Usuario {
  id: string;

  @IsString({ message: 'O nome deve ser uma string' })
  nome: string;

  @IsString({ message: 'Informe o número do CPF sem pontos e/ou traços' })
  @Matches(/^\d{11}$/, { message: 'O CPF deve conter exatamente 11 dígitos' })
  cpf: string;

  @IsDate({ message: 'Por favor, verifique a data de nascimento' })
  @ValidateIf((o) => o.data_nascimento !== null)
  data_nascimento: Date;

  @IsOptional()
  @IsEnum(Genero, { message: 'Escolha uma opção da lista de gêneros' })
  genero: Genero;

  @IsBoolean({ message: 'Determine se o usuário está ativo ou inativo' })
  ativo: boolean;

  @IsOptional()
  @IsString({ message: 'Token inválido' })
  @ValidateIf((o) => o.token !== null)
  token: string;

  @IsDate({ message: 'Data de criação não é válida' })
  data_criacao: Date;

  @IsDate({ message: 'Data de atualização não é válida' })
  data_atualizacao: Date;

  //relações:

  contato: Contato;

  endereco: Endereco;
}
