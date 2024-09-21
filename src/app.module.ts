import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ContactModule } from '@contact/contact.module';
import { AddressModule } from '@address/address.module';
import { UserModule } from '@user/user.module';
import { EnterpriseModule } from '@enterprise/enterprise.module';
import { ClubModule } from './modules/club/club.module';
import { ServicesModule } from './modules/services/services.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { CategoryModule } from './modules/category/category.module';
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
    ServicesModule,
    GalleryModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
