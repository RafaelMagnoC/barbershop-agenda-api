import {
  IsDate,
  IsEmail,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class Contato {
  id: string;

  @IsOptional()
  @IsString({ message: 'O e-mail deve ser uma string' })
  @IsEmail({}, { message: 'O e-mail deve ser válido' })
  email: string;

  @IsOptional()
  @IsString({ message: 'O telefone deve ser uma string' })
  @Length(10, 15, { message: 'O telefone deve ter entre 10 e 15 caracteres' })
  telefone: string;

  @IsOptional()
  @IsString({ message: 'O WhatsApp deve ser uma string' })
  @Length(10, 15, { message: 'O WhatsApp deve ter entre 10 e 15 caracteres' })
  whatsapp: string;

  @IsOptional()
  @IsString({ message: 'O Instagram deve ser uma string' })
  @IsUrl({}, { message: 'O Instagram deve ser uma URL válida' })
  instagram: string;

  @IsOptional()
  @IsString({ message: 'O Facebook deve ser uma string' })
  @IsUrl({}, { message: 'O Facebook deve ser uma URL válida' })
  facebook: string;

  @IsDate({ message: 'Data de criação não é válida' })
  data_criacao: Date;

  @IsDate({ message: 'Data de atualização não é válida' })
  data_atualizacao: Date;
}
