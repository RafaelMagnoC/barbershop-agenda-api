import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from '@user/dto/create-user.dto';

export class CreateAdministratorDto {
  @ApiProperty({
    description: 'dados do usuário',
    type: CreateUserDto,
  })
  user?: CreateUserDto;
}
