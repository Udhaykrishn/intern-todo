import { IsString,IsNotEmpty,IsOptional } from "class-validator";
export class todoDto{

    @IsString({message:"should be string"})
    @IsNotEmpty({message:"should be enter"})
    list:string;
}

export class updateDto{

    @IsOptional()
    list?:string;
}