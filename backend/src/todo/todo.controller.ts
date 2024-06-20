import { Controller,Get,Body,Delete,Post,Patch } from '@nestjs/common';
import { TodoService } from './todo.service';
import { todoDto, updateDto } from './dto';

@Controller('todo')
export class TodoController {
    constructor(private readonly service:TodoService){

    }

    @Post()
    async createTodo(@Body() todoList:todoDto){
        return this.service.create(todoList)
    }

    @Get()
    async getAllTodo(){
        return this.service.()
    }

    @Patch()
    async updateTodo(@Body() todoUpdate:updateDto){
        return this.service.updateTodo()
    }

    @Delete()
    async deleteTodo(){
        return this.service.deleteTodo()
    }

}
