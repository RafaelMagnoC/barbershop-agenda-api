import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsObject } from 'class-validator';
import { CreateAppointmentDto } from '../create-appointment.dto';
import { CreateAppointmentServiceDto } from '../create-appointment-service.dto';

export class CreateAppointmentDefaultDto {
  @ApiProperty({
    description: 'dados do agendamento',
    type: CreateAppointmentDto,
  })
  @IsObject()
  @IsDefined()
  appointment?: CreateAppointmentDto;

  @ApiProperty({
    description: 'serviços escolhido pelo cliente',
    type: [String],
  })
  @IsObject()
  services: string[];
}
