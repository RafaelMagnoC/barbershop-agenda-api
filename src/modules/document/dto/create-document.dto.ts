import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches } from 'class-validator';

export class CreateDocumentDto {
  @ApiProperty({
    description: 'Número do CPF do usuário, sem pontos e/ou traços',
    example: '12345678901',
  })
  @IsString({ message: 'Informe o número do CPF sem pontos e/ou traços' })
  @Matches(/^\d{11}$/, { message: 'O CPF deve conter exatamente 11 dígitos' })
  cpf: string;

  @ApiProperty({
    description: 'Número do RG do usuário, sem pontos e/ou traços',
    example: '123456789',
  })
  @IsString({ message: 'Informe o número do RG sem pontos e/ou traços' })
  @Matches(/^\d{9}$/, { message: 'O RG deve conter exatamente 9 dígitos' })
  rg: string;
}
