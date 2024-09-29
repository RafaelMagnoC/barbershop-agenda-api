import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from '@src/modules/user/dto/create-user.dto';

export class CreateAttendantDto {
  @ApiProperty({
    description: 'dados do usuário',
    type: CreateUserDto,
  })
  user?: CreateUserDto;
}
