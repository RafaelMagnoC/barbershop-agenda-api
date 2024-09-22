import { UserEntity } from '@user/entities/user.entity';

export class AdministratorEntity {
  id: string;
  user?: UserEntity;
  userId?: string;
}
