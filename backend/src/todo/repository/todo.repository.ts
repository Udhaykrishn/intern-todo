import { Injectable } from "@nestjs/common";
import { PrismaService } from '../../prisma/prisma.service';
import { todoDto } from "../dto";

export class TodoRepository{
    constructor(private readonly prsima:PrismaService){}

    create(data:todoDto){
        return this.prsima.todo.create({
            data:data
        })
    }
}