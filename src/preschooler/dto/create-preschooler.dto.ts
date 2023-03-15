import { IsDefined, Min, Max } from "class-validator";

export class CreatePreschoolerDto {

    @IsDefined()
    name:string;

    @Min(3)
    @Max(6)
    @IsDefined()
    age:number;
}
