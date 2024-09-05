import {
  IsString,
  Length,
  Matches,
  IsOptional,
  IsEnum,
  IsDate,
} from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'endereco' })
export class Endereco {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsString({ message: 'O logradouro deve ser uma string' })
  @Length(1, 255, { message: 'O logradouro deve ter entre 1 e 255 caracteres' })
  @Column({ type: 'varchar', length: 255 })
  logradouro: string;

  @IsString({ message: 'O número deve ser uma string' })
  @Length(1, 5, { message: 'O número deve ter entre 1 e 5 caracteres' })
  @Column({ type: 'varchar', length: 5 })
  numero: string;

  @IsString({ message: 'O bairro deve ser uma string' })
  @Length(1, 30, { message: 'O bairro deve ter entre 1 e 30 caracteres' })
  @Column({ type: 'varchar', length: 30 })
  bairro: string;

  @IsString({ message: 'A cidade deve ser uma string' })
  @Length(1, 100, { message: 'A cidade deve ter entre 1 e 100 caracteres' })
  @Column({ type: 'varchar', length: 100 })
  cidade: string;

  @IsString({ message: 'A UF deve ser uma string' })
  @Length(2, 2, { message: 'A UF deve ter exatamente 2 caracteres' })
  @Matches(/^[A-Z]{2}$/, {
    message: 'A UF deve ser uma sigla de dois caracteres maiúsculos',
  })
  @Column({ type: 'char', length: 2 })
  uf: string;

  @IsString({ message: 'O CEP deve ser uma string' })
  @Matches(/^\d{5}-\d{3}$/, {
    message: 'O CEP deve estar no formato XXXXX-XXX',
  })
  @Column({ type: 'varchar', length: 10 })
  cep: string;

  @IsString({ message: 'O complemento deve ser uma string' })
  @Length(0, 100, {
    message: 'O complemento deve ter no máximo 100 caracteres',
  })
  @IsOptional()
  @Column({ type: 'varchar', length: 100, nullable: true })
  complemento: string;

  @IsDate({ message: 'Data de criação não é válida' })
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  data_criacao: Date;

  @IsDate({ message: 'Data de atualização não é válida' })
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  data_atualizacao: Date;
}
