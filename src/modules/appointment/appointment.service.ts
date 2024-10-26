import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prismaService/prisma.service';
import { CreateAppointmentDefaultDto } from './dto/default/create-appointment-default.dto';
import { UpdateAppointmentDefaultDto } from './dto/default/update-appointment-default.dto';
import { AppointmentDefault } from '@prisma/client';

@Injectable()
export class AppointmentService {
  constructor(readonly prisma: PrismaService) {}
  async create_appointment_default(createAppointmentDefaultDto: CreateAppointmentDefaultDto): Promise<Object | undefined> {
    const { services, appointment } = createAppointmentDefaultDto;

    const AppointmentStatusText = {
      0: 'agendado',
      1: 'em atendimento',
      2: 'cancelado',
      3: 'concluído',
    };

    const appointment_default = await this.prisma.appointmentDefault.create({
      data: {
        appointment: {
          create: {
            date: appointment.date,
            hour: appointment.hour,
            client_id: appointment.client_id,
            attendant_id: appointment.attendant_id,
          },
        },
        services: {
          create: services.map((service) => ({
            service: {
              connect: { id: service.service_id },
            },
          })),
        },
      },
      include: {
        services: true, // Inclua os serviços se necessário
      },
    });

    const attendant = await this.prisma.attendant.findUnique({
      where: { id: appointment.attendant_id },
      include: { user: true },
    });

    return {
      date: this.formatDateToBrazilian(appointment.date.toString()),
      hour: this.extractTime(appointment.hour),
      status: AppointmentStatusText[appointment.status],
      attendant: attendant.user.name,
      statusCode: 201,
      message: 'Agendamento realizado com sucesso!',
    };
  }

  formatDateToBrazilian(isoString: string): string {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0'); // Adiciona zero à esquerda se necessário
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = date.getFullYear();

    return `${day}/${month}/${year}`; // Formato DD/MM/YYYY
  }

  extractTime(isoString: string): string {
    const date = new Date(isoString);
    return date.toTimeString().split(' ')[0]; // Retorna a hora no formato HH:MM:SS
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
