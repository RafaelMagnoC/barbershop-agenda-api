export class ServiceEntity {
  id: string;
  name: string;
  description?: string;
  price?: number;
  time?: number;
  comission?: number;
  is_active: boolean;
  created_at: Date;
  updated_at?: Date;

  //relations
  gallery_service_id: string;
}
