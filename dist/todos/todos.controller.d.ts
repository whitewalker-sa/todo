import { TodosService } from './todos.service';
import { Todo } from './todo.entity';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    findAll(): Promise<Todo[]>;
    findOne(id: any): Promise<Todo>;
    create(todoData: Todo): Promise<Todo>;
    update(id: any, todoData: Todo): Promise<any>;
    delete(id: any): Promise<any>;
}
