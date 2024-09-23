import { ContactEntity } from '@contact/entities/contact.entity';
import { AddressEntity } from '@address/entities/address.entity';
import { Exclude, Transform } from 'class-transformer';
export class UserEntity {
  id: string;

  name: string;

  username: string;

  @Transform(({ value }) => {
    if (!value) {
      return '';
    }
    return value;
  })
  birthday: Date;

  gender: string;

  is_active: boolean;

  @Exclude()
  token: string;

  @Exclude()
  created_at?: Date;

  @Exclude()
  updated_at?: Date;

  //relations:
  @Exclude()
  contact?: ContactEntity;
  @Exclude()
  contact_id?: string;

  @Exclude()
  address?: AddressEntity;
  @Exclude()
  address_id?: string;

  @Exclude()
  document_id?: string;
}
