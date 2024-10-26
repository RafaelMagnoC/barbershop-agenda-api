import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAppointmentDefaultDto } from './create-appointment-default.dto';
import { UpdateAppointmentDto } from '../update-appointment.dto';
import { CreateAppointmentServiceDto } from '../create-appointment-service.dto';
import { IsArray, IsString } from 'class-validator';

export class UpdateAppointmentDefaultDto extends PartialType(CreateAppointmentDefaultDto) {
  @ApiProperty({
    description: 'dados do agendamento',
    type: UpdateAppointmentDto,
  })
  appointment?: UpdateAppointmentDto;

  @ApiProperty({
    description: 'ids dos serviços',
    type: [CreateAppointmentServiceDto],
  })
  @IsArray()
  @IsString({ each: true })
  services: CreateAppointmentServiceDto[];
}
