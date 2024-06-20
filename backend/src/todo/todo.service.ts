import { Injectable } from '@nestjs/common';
import { TodoRepository } from './repository/todo.repository';
import { todoDto } from './dto';

@Injectable()
export class TodoService {
    constructor(private readonly repository:TodoRepository){
    }

    create(data:todoDto){
        return this.repository.create(data)
    }

    getAll(){
        return this.repository.getAll()
    }
}
