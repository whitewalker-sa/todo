import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// Custom Modules
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
// Entities
import { Todo } from './todos/todo.entity';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User, Todo],
      synchronize: true,
    }),
    UsersModule,
    TodosModule],
})
export class AppModule { }
