import { Controller,Get,Body,Delete,Post,Patch, Param, ParseIntPipe } from '@nestjs/common';
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
        return this.service.getAll()
    }

    @Get(":todoId")
    async getTodoById(@Param("todoId",ParseIntPipe) id:number){
        return this.service.getTodoById(id)
    }


    @Patch(":userId")
    async updateTodo(@Param('userId',ParseIntPipe ) userId:number,@Body() todoUpdate:updateDto){
        return this.service.updateTodo(userId,todoUpdate)
    }

    @Delete(":userId")
    async deleteTodo(@Param('userId',ParseIntPipe)userId:number){
        return this.service.deleteTodo(userId)
    }

}
