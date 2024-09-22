import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Nome da categoria',
    example: 'Bebidas',
  })
  @IsString({ message: 'O nome deve ser uma string' })
  name: string;

  @ApiProperty({
    description: 'Descrição para categoria',
    example: 'Bebidas em geral - alcoólicas e não alcoólicas',
  })
  @IsString({ message: 'A descrição deve ser uma string' })
  description?: string;
}
