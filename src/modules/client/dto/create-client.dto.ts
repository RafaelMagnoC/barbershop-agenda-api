import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from '@src/modules/user/dto/create-user.dto';

export class CreateClientDto {
  @ApiProperty({
    description: 'dados do usuário',
    type: CreateUserDto,
  })
  user?: CreateUserDto;
}
