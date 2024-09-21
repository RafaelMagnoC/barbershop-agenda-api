import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ContactModule } from '@contact/contact.module';
import { AddressModule } from '@address/address.module';
import { UserModule } from '@user/user.module';
import { EnterpriseModule } from '@enterprise/enterprise.module';
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
