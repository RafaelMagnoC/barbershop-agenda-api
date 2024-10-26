import { ApiProperty } from '@nestjs/swagger';

export class CreateAppointmentServiceDto {
  @ApiProperty({
    description: 'id do serviço',
    example: 'b2931c2c-e53b-468d-b2f4-397e82161206',
    type: String,
  })
  service_id: string;
}
