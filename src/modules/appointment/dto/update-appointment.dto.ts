import { ApiProperty } from '@nestjs/swagger';
import { AppointmentStatus } from '@enums/appointment.status.enum';
import { IsDateString, IsEnum, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';

export class UpdateAppointmentDto {
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
    description: 'Status do agendamento',
    enum: AppointmentStatus,
    example: AppointmentStatus.scheduled,
  })
  @IsOptional()
  @IsEnum(AppointmentStatus, { message: 'Escolha um status para o agendamento' })
  status: AppointmentStatus;

  @ApiProperty({
    description: 'data da atualização',
    type: Date,
  })
  @IsDateString()
  updated_at: string = new Date().toLocaleString('pt-BR');

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

  @ApiProperty({
    description: 'ids dos serviços escolhidos pelo cliente',
    example: '1863481468764, 219-7493127549-2057',
    type: String,
  })
  @IsObject()
  services: string;
}
