import { Months } from '@enums/months.enum';
import { PaymentTypes } from '@enums/payment.types.enum';

export class Payment {
  id: string;
  amount: number;
  month: Months;
  payment_type: PaymentTypes;
  created_at: Date;
  updated_at: Date;
}
