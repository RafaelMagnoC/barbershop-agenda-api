import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsDateString, IsEnum, IsOptional, IsString, Matches, ValidateIf } from 'class-validator';
import { Gender } from '@enums/gender.enum';
import { CreateContactDto } from '@contact/dto/create-contact.dto';
import { CreateAddressDto } from '@address/dto/create-address.dto';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'João Silva',
  })
  @IsString({ message: 'O nome deve ser uma string' })
  name: string;

  @ApiProperty({
    description: 'Data de nascimento do usuário',
    type: Date, // Swagger não tem suporte para Date diretamente; você pode usar String para ISO 8601
    example: '1990-01-01T00:00:00Z',
  })
  @IsDateString()
  @ValidateIf((o) => o.data_nascimento !== null)
  birthday: Date;

  @ApiProperty({
    description: 'Gênero do usuário',
    enum: Gender,
    example: Gender.male,
  })
  @IsOptional()
  @IsEnum(Gender, { message: 'Escolha uma opção da lista de gêneros' })
  gender: Gender;

  @ApiProperty({
    description: 'username',
    example: 'joao.silva',
  })
  @IsString({ message: 'O username deve ser uma string' })
  username: string;

  @ApiProperty({
    description: 'Status do usuário',
    default: true,
  })
  @IsBoolean({ message: 'Determine se o usuário está ativo ou inativo' })
  status: boolean;

  //relacionamentos

  @ApiProperty({
    description: 'Contato do usuário',
    type: CreateContactDto,
  })
  contact: CreateContactDto;

  @ApiProperty({
    description: 'Endereço do usuário',
    type: CreateAddressDto,
  })
  address: CreateAddressDto;
}
