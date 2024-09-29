import { UserEntity } from '@src/modules/user/entities/user.entity';

export class AttendantEntity {
  id: string;
  user?: UserEntity;
  userId?: string;
}
