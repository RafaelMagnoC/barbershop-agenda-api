export class ServiceEntity {
  id: string;
  name: string;
  description?: string;
  cost?: number;
  time?: number;
  comission?: number;
  is_active: boolean;
  created_at: Date;
  updated_at?: Date;

  //relations
  gallery_service_id: string;
}
