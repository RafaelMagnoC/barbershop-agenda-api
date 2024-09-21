import { IsBoolean, IsDate, IsEnum, IsOptional, IsString, ValidateIf } from 'class-validator';
import { Gender } from '@enums/gender.enum';
import { ContactEntity } from '@contact/entities/contact.entity';
import { AddressEntity } from '@address/entities/address.entity';
import { Exclude } from 'class-transformer';
export class UserEntity {
  id: string;

  @IsString({ message: 'O nome deve ser uma string' })
  name: string;

  @IsString({ message: 'O nome de usuário deve ser uma string' })
  username: string;

  @IsDate({ message: 'Por favor, verifique a data de nascimento' })
  @ValidateIf((o) => o.data_nascimento !== null)
  birthday: Date;

  @IsOptional()
  @IsEnum(Gender, { message: 'Escolha uma opção da lista de gêneros' })
  gender: string;

  @IsBoolean({ message: 'Determine se o usuário está ativo ou inativo' })
  is_active: boolean;

  @Exclude()
  @IsOptional()
  @IsString({ message: 'Token inválido' })
  @ValidateIf((o) => o.token !== null)
  token: string;

  @IsDate({ message: 'Data de criação não é válida' })
  created_at?: Date;

  @IsDate({ message: 'Data de atualização não é válida' })
  updated_at?: Date;

  //relations:

  contact?: ContactEntity;
  contact_id?: string;

  address?: AddressEntity;
  address_id?: string;
}
