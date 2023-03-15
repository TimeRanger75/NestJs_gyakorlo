import { Preschooler } from "src/preschooler/entities/preschooler.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Plushie {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    type:string

    @Column('int')
    size:number

    @ManyToOne(()=> Preschooler, (preschooler)=> preschooler.id,{
        onDelete: 'SET NULL',
    })
    preschooler:Preschooler;

}
