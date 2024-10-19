import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, IsObject, IsDefined } from 'class-validator';
import { CreateAddressDto } from '@address/dto/create-address.dto';
import { CreateContactDto } from '@contact/dto/create-contact.dto';

export class CreateEnterpriseDto {
  @ApiProperty({
    description: 'Nome da empresa',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Razão social da empresa',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  social_reason: string;

  @ApiProperty({
    description: 'CNPJ da empresa',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @ApiProperty({
    description: 'Logo da empresa',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  logo: string;

  @ApiProperty({
    description: 'Status de atividade da empresa',
    type: Boolean,
  })
  @IsBoolean()
  @IsDefined()
  status: boolean;

  @ApiProperty({
    description: 'Contato do usuário',
    type: CreateContactDto,
  })
  @IsObject()
  @IsDefined()
  contact: CreateContactDto;

  @ApiProperty({
    description: 'Endereço do usuário',
    type: CreateAddressDto,
  })
  @IsObject()
  @IsDefined()
  address: CreateAddressDto;
}
