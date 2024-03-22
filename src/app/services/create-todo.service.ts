import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Todo
{
  value!: string;
  status!: string;
  id!: number;
}

@Injectable({
  providedIn: 'root'
})

export class CreateTodoService {
  deleteIndex?: number;
  number = 2;
  todoList$ = new Subject<Todo[]>();

  public todoList: Array<Todo> =
  [
    {value: "Заметка 1", status: "Обычная", id: 0},
    {value: "Заметка 2", status: "Важная", id: 1},
    {value: "Заметка 3", status: "Выполненная", id: 2}
  ];

  public filterList: Array<Todo> = this.todoList;

  constructor() {
    this.todoList$.next(this.todoList);
   }

  public newRecord(newValue: string, newStatus: string): void{
    this.todoList.push({value: newValue, status: newStatus, id: this.number+=1});
    this.todoList$.next(this.todoList);
  }

  public deleteRecord(id: number)
  {
    this.todoList = this.todoList.filter(record => record.id !== id);
    this.todoList$.next(this.todoList);
  }

}
