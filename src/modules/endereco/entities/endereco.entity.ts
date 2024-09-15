import {
  IsString,
  Length,
  Matches,
  IsOptional,
  IsEnum,
  IsDate,
} from 'class-validator';
export class Endereco {
  id: string;

  @IsString({ message: 'O logradouro deve ser uma string' })
  @Length(1, 255, { message: 'O logradouro deve ter entre 1 e 255 caracteres' })
  logradouro: string;

  @IsString({ message: 'O número deve ser uma string' })
  @Length(1, 5, { message: 'O número deve ter entre 1 e 5 caracteres' })
  numero: string;

  @IsString({ message: 'O bairro deve ser uma string' })
  @Length(1, 30, { message: 'O bairro deve ter entre 1 e 30 caracteres' })
  bairro: string;

  @IsString({ message: 'A cidade deve ser uma string' })
  @Length(1, 100, { message: 'A cidade deve ter entre 1 e 100 caracteres' })
  cidade: string;

  @IsString({ message: 'A UF deve ser uma string' })
  @Length(2, 2, { message: 'A UF deve ter exatamente 2 caracteres' })
  @Matches(/^[A-Z]{2}$/, {
    message: 'A UF deve ser uma sigla de dois caracteres maiúsculos',
  })
  uf: string;

  @IsString({ message: 'O CEP deve ser uma string' })
  @Matches(/^\d{5}-\d{3}$/, {
    message: 'O CEP deve estar no formato XXXXX-XXX',
  })
  cep: string;

  @IsString({ message: 'O complemento deve ser uma string' })
  @Length(0, 100, {
    message: 'O complemento deve ter no máximo 100 caracteres',
  })
  @IsOptional()
  complemento: string;

  @IsDate({ message: 'Data de criação não é válida' })
  data_criacao: Date;

  @IsDate({ message: 'Data de atualização não é válida' })
  data_atualizacao: Date;
}
