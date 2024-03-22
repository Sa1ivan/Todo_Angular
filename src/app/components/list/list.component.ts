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
  }
}
