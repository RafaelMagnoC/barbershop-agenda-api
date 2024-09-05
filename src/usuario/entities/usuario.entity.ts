import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsString,
  Matches,
  ValidateIf,
} from 'class-validator';
import { Genero as Genero_Enum } from 'src/enums/genero.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuario' })
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsString({ message: 'O nome deve ser uma string' })
  @Column({ length: 30, nullable: false })
  nome: string;

  @IsString({ message: 'Informe o número do CPF sem pontos e/ou traços' })
  @Matches(/^\d{11}$/, { message: 'O CPF deve conter exatamente 11 dígitos' })
  @Column({ length: 11, nullable: false, unique: true })
  cpf: string;

  @IsDate({ message: 'Por favor, verifique a data de nascimento' })
  @ValidateIf((o) => o.data_nascimento !== null)
  @Column({ type: Date, nullable: true })
  data_nascimento: Date;

  @IsEnum(Genero_Enum, { message: 'Escolha uma opção da lista de gêneros' })
  @Column({ type: 'enum', enum: Genero_Enum, nullable: false })
  genero: Genero_Enum;

  @IsBoolean({ message: 'Determine se o usuário está ativo ou inativo' })
  @Column({ type: Boolean, default: true })
  ativo: boolean;

  @IsString({ message: 'Token inválido' })
  @ValidateIf((o) => o.token !== null)
  @Column({ type: String, nullable: true })
  token: string;

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
