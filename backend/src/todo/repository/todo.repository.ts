import { Injectable } from "@nestjs/common";
import { PrismaService } from '../../prisma/prisma.service';
import { todoDto, updateDto } from "../dto";

export class TodoRepository{
    constructor(private readonly prsima:PrismaService){}

    create(data:todoDto){
        return this.prsima.todo.create({
            data:data
        })
    }

    getAll(){
        return this.prsima.todo.findMany()
    }

    updateTodo(userId:number,data:updateDto){
        return this.prsima.todo.update({
            where:
        })
    }
}