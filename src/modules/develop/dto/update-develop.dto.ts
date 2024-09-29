import { PartialType } from '@nestjs/swagger';
import { CreateDevelopDto } from './create-develop.dto';

export class UpdateDevelopDto extends PartialType(CreateDevelopDto) {}
