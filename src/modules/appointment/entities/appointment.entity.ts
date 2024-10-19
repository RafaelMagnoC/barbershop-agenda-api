import { AppointmentStatus } from '@enums/appointment.status.enum';
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AppointmentEntity {
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
    example: new Date().toLocaleDateString('pt-BR'),
  })
  @IsString()
  updated_at: string;

  /**
   * Permitir a troca de profissional num agendamento
   */
}
