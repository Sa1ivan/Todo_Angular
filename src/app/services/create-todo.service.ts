import { Injectable } from '@angular/core';

export class Todo
{
  value!: string;
  status!: string;
  isCompleted!: boolean;
}


@Injectable({
  providedIn: 'root'
})

export class CreateTodoService {
  public todoList: Array<Todo> =
  [
    {value: "Заметка 1", status: "Обычная", isCompleted: false},
    {value: "Заметка 2", status: "Важная", isCompleted: true},
    {value: "Заметка 3", status: "Выполненная", isCompleted: false}
  ];
  constructor() { }
  public newRecord(newValue: string, newStatus: string): void{
    this.todoList.push({value: newValue, status: newStatus, isCompleted: false});
  }
  public deleteRecord(value: string)
  {
    this.todoList = this.todoList.filter(record => record.value !== value)
  }
  public closeRecord(id: number){
    this.todoList[id].isCompleted = !this.todoList[id].isCompleted;
  }
}
