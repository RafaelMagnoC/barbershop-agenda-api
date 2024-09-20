import { IsString, Length, Matches, IsOptional, IsDate } from 'class-validator';
export class AddressEntity {
  id: string;

  @IsString({ message: 'O logradouro deve ser uma string' })
  @Length(1, 255, { message: 'O logradouro deve ter entre 1 e 255 caracteres' })
  street: string;

  @IsString({ message: 'O número deve ser uma string' })
  @Length(1, 5, { message: 'O número deve ter entre 1 e 5 caracteres' })
  number: string;

  @IsString({ message: 'O complemento deve ser uma string' })
  @Length(0, 100, {
    message: 'O complemento deve ter no máximo 100 caracteres',
  })
  @IsOptional()
  complement: string;

  @IsString({ message: 'O bairro deve ser uma string' })
  @Length(1, 30, { message: 'O bairro deve ter entre 1 e 30 caracteres' })
  district: string;

  @IsString({ message: 'A cidade deve ser uma string' })
  @Length(1, 100, { message: 'A cidade deve ter entre 1 e 100 caracteres' })
  city: string;

  @IsString({ message: 'A UF deve ser uma string' })
  @Length(2, 2, { message: 'A UF deve ter exatamente 2 caracteres' })
  @Matches(/^[A-Z]{2}$/, {
    message: 'A UF deve ser uma sigla de dois caracteres maiúsculos',
  })
  state: string;

  @IsString({ message: 'O CEP deve ser uma string' })
  @Matches(/^\d{5}-\d{3}$/, {
    message: 'O CEP deve estar no formato XXXXX-XXX',
  })
  zipCode: string;

  @IsDate({ message: 'Data de criação não é válida' })
  created_at: Date;

  @IsDate({ message: 'Data de atualização não é válida' })
  updated_at: Date;
}
