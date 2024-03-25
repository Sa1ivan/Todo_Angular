import { Component, OnInit } from '@angular/core';
import { CreateTodoService, Todo } from 'src/app/services/create-todo.service';
import { RecordComponent } from '../record/record.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todoList: Array<Todo> = [];

  constructor(public todoService: CreateTodoService){
    this.todoList = this.todoService.todoList;
  }

  ngOnInit(): void {
    this.todoService.todoList$.subscribe((list)=> {
      this.todoList = list;
    })
  }
  filterTodo(search: {value: string, status: string})
  {
    this.todoList = this.todoService.todoList;
    if(search.value == "" && search.status == "")
    {
      alert("Для поиска введите значения!");
    }
    if(search.value == "" && search.status != "")
    {
      this.todoList = this.todoList.filter(record => record.status == search.status);
    }
    if(search.value != "" && search.status == "")
    {
      this.todoList = this.todoList.filter(record => record.value == search.value);
    }
    if(search.value != "" && search.status != "")
    {
      this.todoList = this.todoList.filter(record => (record.value == search.value && record.status == search.status));
    }
  }

  newRecord(newRecord: {value: string, status: string})
  {
    this.todoService.newRecord(newRecord);
  }

  deleteRecord(id: number)
  {
    this.todoService.deleteRecord(id);
  }
}
