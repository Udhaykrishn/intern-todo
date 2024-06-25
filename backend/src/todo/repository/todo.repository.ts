import { Injectable } from "@nestjs/common";
import { PrismaService } from '../../prisma/prisma.service';
import { todoDto, updateDto } from "../dto"; 

@Injectable()
export class TodoRepository{
    constructor(private readonly prsima:PrismaService){}

    create(data:todoDto){
        return this.prsima.todo.create({
            data:data
        })
    }

    findOne(id:number){
        return this.prsima.todo.findFirst({
            where:{id}
        })
    }

    getAll(){
        return this.prsima.todo.findMany()
    }

    updateTodo(userId:number,data:updateDto){
        return this.prsima.todo.update({
           where:{id:userId},
           data:data
        })
    }

    deleteTodo(userId:number){
        return this.prsima.todo.delete({
            where:{id:userId}
        })
    }
}