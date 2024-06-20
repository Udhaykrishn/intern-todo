import { Controller,Get,Body,Param,Post,Patch } from '@nestjs/common';
import { TodoService } from './todo.service';
import { todoDto } from './dto';

@Controller('todo')
export class TodoController {
    constructor(private readonly service:TodoService){

    }

    @Post()
    async createTodo(@Body() todoList:todoDto){
        return this.service.create(todoList)
    }
}
