import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AddressModule } from '@address/address.module';
import { ContactModule } from '@contact/contact.module';
import { PrismaService } from '@prismaService/prisma.service';

@Module({
  imports: [AddressModule, ContactModule],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
