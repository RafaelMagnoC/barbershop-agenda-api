import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, IsUrl, Length } from 'class-validator';

export class CreateContatoDto {
  @ApiProperty({
    description: 'O e-mail do usuário',
    example: 'usuario@example.com',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'O e-mail deve ser uma string' })
  @IsEmail({}, { message: 'O e-mail deve ser válido' })
  email: string;

  @ApiProperty({
    description: 'O telefone do usuário',
    example: '11987654321',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'O telefone deve ser uma string' })
  @Length(10, 15, { message: 'O telefone deve ter entre 10 e 15 caracteres' })
  phone: string;

  @ApiProperty({
    description: 'O WhatsApp do usuário',
    example: '11987654321',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'O WhatsApp deve ser uma string' })
  @Length(10, 15, { message: 'O WhatsApp deve ter entre 10 e 15 caracteres' })
  whatsapp: string;

  @ApiProperty({
    description: 'O Instagram do usuário',
    example: 'https://instagram.com/usuario',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'O Instagram deve ser uma string' })
  @IsUrl({}, { message: 'O Instagram deve ser uma URL válida' })
  instagram: string;

  @ApiProperty({
    description: 'O Facebook do usuário',
    example: 'https://facebook.com/usuario',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'O Facebook deve ser uma string' })
  @IsUrl({}, { message: 'O Facebook deve ser uma URL válida' })
  facebook: string;
}
