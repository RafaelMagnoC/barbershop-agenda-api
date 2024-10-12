import { ApiProperty } from '@nestjs/swagger';

export class CreateAgendaDto {
  @ApiProperty({
    description: 'Nome do evento',
  })
  date: Date;

  @ApiProperty({
    description: '',
  })
  start_time: string;

  @ApiProperty({
    description: '',
  })
  end_time: string;
}
