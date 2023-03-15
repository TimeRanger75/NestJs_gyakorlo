import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreatePlushieDto } from './dto/create-plushie.dto';
import { UpdatePlushieDto } from './dto/update-plushie.dto';
import { Plushie } from './entities/plushie.entity';

@Injectable()
export class PlushieService {
  constructor(private dataSource: DataSource){}

 async create(createPlushieDto: CreatePlushieDto) {
    const plushie=Object.assign(new Plushie, createPlushieDto)
    this.dataSource.getRepository(Plushie).save(plushie)
    return plushie.type;
  }

 async findAll() {
    return await this.dataSource.getRepository(Plushie).find();
  }

  async findOne(id: number) {
    return await this.dataSource.getRepository(Plushie).findOneBy({id})
  }

 async update(id: number, updatePlushieDto: UpdatePlushieDto) {
    this.dataSource.getRepository(Plushie).update(
      {id:id},
      {type:updatePlushieDto.type,
      size:updatePlushieDto.size}
    );
    return await this.dataSource.getRepository(Plushie).findOneBy({id})
  }

  async remove(id: number) {
    this.dataSource.getRepository(Plushie).delete({id});
    return `Row at id: #${id} is deleted successfully`
  }
}
