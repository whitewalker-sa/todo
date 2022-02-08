import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Todo } from './todo.entity';
export declare class TodosService {
    private readonly todoRepository;
    constructor(todoRepository: Repository<Todo>);
    findAll(): Promise<Todo[]>;
    findOne(id: number): Promise<Todo>;
    create(todo: Todo): Promise<Todo>;
    update(id: number, todo: Todo): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
