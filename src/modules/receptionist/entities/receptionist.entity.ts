import { Transform } from 'class-transformer';

export class ReceptionistEntity {
  id?: string;

  name?: string;

  username?: string;

  @Transform(({ value }) => {
    if (!value) {
      return '';
    }
    return value;
  })
  birthday?: Date;

  gender?: string;

  is_active?: boolean;
}
