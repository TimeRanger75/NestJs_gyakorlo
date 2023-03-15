import { IsDefined, Min } from "class-validator";

export class CreatePlushieDto {

    @IsDefined()
    type:string;

    @IsDefined()
    @Min(5)
    size:number
}
