import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAppointmentDefaultDto } from './create-appointment-default.dto';
import { UpdateAppointmentDto } from '../update-appointment.dto';

export class UpdateAppointmentDefaultDto extends PartialType(CreateAppointmentDefaultDto) {
  @ApiProperty({
    description: 'dados do agendamento',
    type: UpdateAppointmentDto,
  })
  appointment?: UpdateAppointmentDto;
}
