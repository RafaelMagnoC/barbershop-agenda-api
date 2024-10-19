import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDefaultDto } from './dto/default/create-appointment-default.dto';
import { UpdateAppointmentDefaultDto } from './dto/default/update-appointment-default.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('appointment')
@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @ApiOperation({ summary: 'Cria um novo agendamento' })
  @ApiBody({ type: CreateAppointmentDefaultDto })
  @ApiResponse({
    status: 201,
    description: 'Agendamento realizado com sucesso!',
    type: CreateAppointmentDefaultDto,
  })
  @Post('default')
  create_appointment_default(@Body() createAppointmentDto: CreateAppointmentDefaultDto) {
    return this.appointmentService.create_appointment_default(createAppointmentDto);
  }

  @Get()
  findAll() {
    return this.appointmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppointmentDto: UpdateAppointmentDefaultDto) {
    return this.appointmentService.update_appointment_default(id, updateAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentService.remove(id);
  }
}
