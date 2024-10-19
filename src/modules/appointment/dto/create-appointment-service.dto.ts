import { ApiProperty } from '@nestjs/swagger';
import { CreateServiceDto } from '@src/modules/service/dto/create-service.dto';

export class CreateAppointmentServiceDto {
  @ApiProperty({
    description: 'id do agendamento',
    example: '`1267357128563491264`',
    type: String,
  })
  appointment_id: string;

  @ApiProperty({
    description: 'id do serviço',
    example: '`126735712ksol835-07283507`',
    type: String,
  })
  service_id: string;
}
