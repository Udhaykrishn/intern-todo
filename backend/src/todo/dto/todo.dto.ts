import { IsString,IsNotEmpty } from "class-validator";
export class todoDto{

    @IsString({message:"should be string"})
    @IsNotEmpty({message:"should be enter"})
    list:string;
}