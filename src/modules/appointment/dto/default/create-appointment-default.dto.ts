import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDefined, IsObject, IsString, ValidateNested } from 'class-validator';
import { CreateAppointmentDto } from '../create-appointment.dto';
import { CreateAppointmentServiceDto } from '../create-appointment-service.dto';
import { Type } from 'class-transformer';

export class CreateAppointmentDefaultDto {
  @ApiProperty({
    description: 'dados do agendamento',
    type: CreateAppointmentDto,
  })
  @IsObject()
  @IsDefined()
  appointment?: CreateAppointmentDto;

  @ApiProperty({
    description: 'ids dos serviços',
    type: [CreateAppointmentServiceDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAppointmentServiceDto) // Necessário para transformação
  services: CreateAppointmentServiceDto[];
}
