import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreatePreschoolerDto } from './dto/create-preschooler.dto';
import { UpdatePreschoolerDto } from './dto/update-preschooler.dto';
import { Preschooler } from './entities/preschooler.entity';

@Injectable()
export class PreschoolerService {
  constructor(private dataSource: DataSource){}

 async create(createPreschoolerDto: CreatePreschoolerDto) {
  const preschooler=Object.assign(new Preschooler, createPreschoolerDto)
  this.dataSource.getRepository(Preschooler).save(preschooler)
  return preschooler.name;
  }

 async findAll() {
  return await this.dataSource.getRepository(Preschooler).find();
  }

 async findOne(id: number) {
  return await this.dataSource.getRepository(Preschooler).findOneBy({id})
  }

 async update(id: number, updatePreschoolerDto: UpdatePreschoolerDto) {
  this.dataSource.getRepository(Preschooler).update(
    {id:id},
    {name:updatePreschoolerDto.name,
    age:updatePreschoolerDto.age}
  );
  return await this.dataSource.getRepository(Preschooler).findOneBy({id})
  }

 async remove(id: number) {
  this.dataSource.getRepository(Preschooler).delete({id});
  return `Row at id: #${id} is deleted successfully`
  }
}
