import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ContactModule } from '@contact/contact.module';
import { AddressModule } from '@address/address.module';
import { UserModule } from '@user/user.module';
import { EnterpriseModule } from '@enterprise/enterprise.module';
import { ClubModule } from '@club/club.module';
import { ServiceModule } from '@service/service.module';
import { GalleryModule } from '@gallery/gallery.module';
import { CategoryModule } from '@category/category.module';
import { PaymentModule } from '@payment/payment.module';
import { AdministratorModule } from '@administrator/administrator.module';
import { DocumentModule } from '@document/document.module';
import { AttendantModule } from './modules/attendant/attendant.module';
import { DevelopModule } from './modules/develop/develop.module';
import { ClientModule } from './modules/client/client.module';
import { ReceptionistModule } from './modules/receptionist/receptionist.module';
import { AgendaModule } from './modules/agenda/agenda.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
    UserModule,
    ContactModule,
    AddressModule,
    EnterpriseModule,
    ClubModule,
    ServiceModule,
    GalleryModule,
    CategoryModule,
    PaymentModule,
    AdministratorModule,
    DocumentModule,
    AttendantModule,
    DevelopModule,
    ClientModule,
    ReceptionistModule,
    AgendaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
