import { Injectable } from '@angular/core';
import { Subject, map, Observable, of, tap, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { inject } from '@angular/core';

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
  todoList$ = new BehaviorSubject<Todo[]>([]);

  public getItems()
  {
    return this.http.get('assets/todo-list.json').pipe(
      tap(item => {
        console.log(item);
      })
    );
  }

  public createNew(result: any)
  {
    this.todoList$.next(result);
  }

  public todoList!: Array<Todo>;

  constructor(private http: HttpClient,) {
    this.todoList$.next(this.todoList);
   }

  public newRecord(valueObj: {value: string, status: string}): void{
    this.todoList = this.todoList$.getValue();
    this.todoList.push({value: valueObj.value, status: valueObj.status, id: this.number+=1})
    this.todoList$.next(this.todoList);
  }

  public deleteRecord(id: number)
  {
    this.todoList = this.todoList$.getValue().filter(record => record.id !== id);
    this.todoList$.next(this.todoList);
  }

}
