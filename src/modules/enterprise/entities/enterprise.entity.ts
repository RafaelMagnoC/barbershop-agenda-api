import { AddressEntity } from '@address/entities/address.entity';
import { ContactEntity } from '@contact/entities/contact.entity';

export class EnterpriseEntity {
  id: string;
  name: string;
  social_reason: string;
  cnpj: string;
  logo?: string;
  status: boolean;
  created_at: Date;
  updated_at?: Date;

  contact?: ContactEntity;
  contact_id?: string;

  address?: AddressEntity;
  address_id?: string;
}
