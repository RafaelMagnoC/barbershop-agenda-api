import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsEnum, IsOptional, IsString, Matches, ValidateIf } from 'class-validator';
import { Genero } from '@enums/genero';
import { CreateContactDto } from '@contact/dto/create-contact.dto';
import { CreateAddressDto } from '@address/dto/create-address.dto';

export class CreateUsuarioDto {
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'João Silva',
  })
  @IsString({ message: 'O nome deve ser uma string' })
  nome: string;

  @ApiProperty({
    description: 'Número do CPF do usuário, sem pontos e/ou traços',
    example: '12345678901',
  })
  @IsString({ message: 'Informe o número do CPF sem pontos e/ou traços' })
  @Matches(/^\d{11}$/, { message: 'O CPF deve conter exatamente 11 dígitos' })
  cpf: string;

  @ApiProperty({
    description: 'Data de nascimento do usuário',
    type: String, // Swagger não tem suporte para Date diretamente; você pode usar String para ISO 8601
    example: '1990-01-01T00:00:00Z',
  })
  @IsDate({ message: 'Por favor, verifique a data de nascimento' })
  @ValidateIf((o) => o.data_nascimento !== null)
  data_nascimento: Date;

  @ApiProperty({
    description: 'Gênero do usuário',
    enum: Genero,
    example: Genero.masculino,
  })
  @IsOptional()
  @IsEnum(Genero, { message: 'Escolha uma opção da lista de gêneros' })
  genero?: Genero;

  @ApiProperty({
    description: 'Status do usuário',
    default: true,
  })
  @IsBoolean({ message: 'Determine se o usuário está ativo ou inativo' })
  ativo: boolean;

  //relacionamentos

  @ApiProperty({
    description: 'Contato do usuário',
    type: CreateContactDto,
  })
  contato: CreateContactDto;

  @ApiProperty({
    description: 'Endereço do usuário',
    type: CreateAddressDto,
  })
  endereco: CreateAddressDto;
}
