import { Component, OnInit, Injectable, OnDestroy, inject } from '@angular/core';
import { CreateTodoService, Todo } from 'src/app/services/create-todo.service';
import { RecordComponent } from '../record/record.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, of, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/user/user';

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
    this.todoService.getItems().subscribe(item => {
       this.todoService.createNew(item);
    });

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
