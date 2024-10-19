import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prismaService/prisma.service';
import { CreateAppointmentDefaultDto } from './dto/default/create-appointment-default.dto';
import { UpdateAppointmentDefaultDto } from './dto/default/update-appointment-default.dto';
import { AppointmentDefault } from '@prisma/client';

@Injectable()
export class AppointmentService {
  constructor(readonly prisma: PrismaService) {}
  async create_appointment_default(createAppointmentDto: CreateAppointmentDefaultDto): Promise<AppointmentDefault | undefined> {
    const { services } = createAppointmentDto;
    const { date, hour, client_id, attendant_id } = createAppointmentDto.appointment;

    const appointment_default = await this.prisma.appointmentDefault.create({
      data: {
        services: {
          create: services.map((service_id) => ({
            service: { connect: { id: service_id } },
          })),
        },
      },
    });

    const appointment = await this.prisma.appointment.create({
      data: {
        date,
        hour,
        client: { connect: { id: client_id } },
        attendant: { connect: { id: attendant_id } },
        appointmentDefault: { connect: { id: appointment_default.id } },
      },
    });

    return appointment_default ? appointment_default : undefined;
  }

  findAll() {
    return `This action returns all appointment`;
  }

  findOne(id: string) {
    return `This action returns a #${id} appointment`;
  }

  update_appointment_default(id: string, updateAppointmentDto: UpdateAppointmentDefaultDto) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: string) {
    return `This action removes a #${id} appointment`;
  }
}
