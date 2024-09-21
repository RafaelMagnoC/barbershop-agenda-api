import { Payment } from './payment.entity';

export class PaymentClub extends Payment {
  id: string;
  club_id: string;
  client_id: string;
  created_at: Date;
  updated_at: Date;
}
