import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateServiceDto {
  @ApiProperty({
    description: 'Nome da serviço',
    example: 'Corte de cabelo simples',
  })
  @IsString({ message: 'O nome deve ser uma string' })
  name: string;

  @ApiProperty({
    description: 'descrição do serviço',
    example: 'Corte de cabelo utilizando máquina e acabamento (pézinho)',
  })
  @IsString({ message: 'O nome deve ser uma string' })
  description?: string;

  @ApiProperty({
    description: 'valor do serviço',
    example: 45.0,
  })
  @IsNumber()
  cost?: number;

  @ApiProperty({
    description: 'tempo médio que dura o serviço em minutos',
    example: 30,
  })
  @IsNumber()
  time?: number;

  @ApiProperty({
    description: 'comissão em porcentagem que o atendente recebe após execução do serviço',
    example: 10,
  })
  @IsNumber()
  comission?: number;
}
