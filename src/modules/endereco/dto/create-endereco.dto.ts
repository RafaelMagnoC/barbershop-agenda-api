import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length, Matches } from 'class-validator';

export class CreateEnderecoDto {
  @ApiProperty({
    description: 'O logradouro do endereço',
    example: 'Rua das Flores',
  })
  @IsString({ message: 'O logradouro deve ser uma string' })
  @Length(1, 255, { message: 'O logradouro deve ter entre 1 e 255 caracteres' })
  street: string;

  @ApiProperty({
    description: 'O número do endereço',
    example: '123',
  })
  @IsString({ message: 'O número deve ser uma string' })
  @Length(1, 5, { message: 'O número deve ter entre 1 e 5 caracteres' })
  number: string;

  @ApiProperty({
    description: 'O complemento do endereço',
    example: 'Apto 101',
    required: false,
  })
  @IsString({ message: 'O complemento deve ser uma string' })
  @Length(0, 50, {
    message: 'O complemento deve ter no máximo 50 caracteres',
  })
  @IsOptional()
  complement: string;

  @ApiProperty({
    description: 'O bairro do endereço',
    example: 'Jardim das Rosas',
  })
  @IsString({ message: 'O bairro deve ser uma string' })
  @Length(1, 30, { message: 'O bairro deve ter entre 1 e 30 caracteres' })
  district: string;

  @ApiProperty({
    description: 'A cidade do endereço',
    example: 'São Paulo',
  })
  @IsString({ message: 'A cidade deve ser uma string' })
  @Length(1, 100, { message: 'A cidade deve ter entre 1 e 100 caracteres' })
  city: string;

  @ApiProperty({
    description: 'A UF do endereço',
    example: 'SP',
  })
  @IsString({ message: 'A UF deve ser uma string' })
  @Length(2, 2, { message: 'A UF deve ter exatamente 2 caracteres' })
  @Matches(/^[A-Z]{2}$/, {
    message: 'A UF deve ser uma sigla de dois caracteres maiúsculos',
  })
  state: string;

  @ApiProperty({
    description: 'O CEP do endereço',
    example: '12345-678',
  })
  @IsString({ message: 'O CEP deve ser uma string' })
  @Matches(/^\d{5}-\d{3}$/, {
    message: 'O CEP deve estar no formato XXXXX-XXX',
  })
  zipCode: string;
}
