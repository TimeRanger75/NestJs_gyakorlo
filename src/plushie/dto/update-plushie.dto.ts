import { PartialType } from '@nestjs/mapped-types';
import { CreatePlushieDto } from './create-plushie.dto';

export class UpdatePlushieDto extends PartialType(CreatePlushieDto) {}
