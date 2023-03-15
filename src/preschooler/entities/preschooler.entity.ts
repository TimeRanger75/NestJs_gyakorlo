import { Plushie } from "src/plushie/entities/plushie.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Preschooler {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column('int')
    age:number;

    @OneToMany(()=> Plushie, (plushie)=> plushie.preschooler)
    plushies:Plushie[]

}
