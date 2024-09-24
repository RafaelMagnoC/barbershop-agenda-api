import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, Length, Max } from 'class-validator';

export class CreateClubDto {
  @ApiProperty({
    description: 'nome do clube',
    example: 'Clube Básico',
  })
  @IsString({ message: 'o nome deve ser uma string' })
  @Length(2, 20, { message: 'o nome deve conter de 2 a 20 caractéres' })
  name: string;

  @ApiProperty({
    description: 'Informações sobre o clube',
    example: 'O clube básico inclui cortes de cabelo básico ilimitado',
  })
  @IsString({ message: 'a descrição deve ser uma string' })
  @Length(0, 100, { message: 'a descroção deve conter no maximo 100 caractéres' })
  description: string;

  @ApiProperty({
    description: 'Preço do clube básico',
    example: 99.99,
  })
  @IsNumber()
  @IsPositive({ message: 'O valor do clube precise ser positivo' })
  @Max(999.0, { message: 'O valor máximo permitido é de R$ 999,00' })
  price: number;
}
