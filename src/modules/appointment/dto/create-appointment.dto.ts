import { ApiProperty } from '@nestjs/swagger';
import { AppointmentStatus } from '@enums/appointment.status.enum';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAppointmentDto {
  @ApiProperty({
    description: 'data do agendamento',
    type: Date,
  })
  @IsDateString()
  @IsNotEmpty()
  date: Date;

  @ApiProperty({
    description: 'horário de agendamento',
    type: Date,
  })
  @IsString()
  hour: string;

  @ApiProperty({
    description: 'status do agendamento',
    enum: AppointmentStatus,
    example: AppointmentStatus.scheduled,
  })
  @IsOptional()
  @IsEnum(AppointmentStatus, { message: 'escolha um status para o agendamento' })
  status: AppointmentStatus;

  @ApiProperty({
    description: 'id do cliente',
    type: String,
  })
  @IsString()
  client_id: string;

  @ApiProperty({
    description: 'id do atendente',
    type: String,
  })
  @IsString()
  attendant_id: string;
}
