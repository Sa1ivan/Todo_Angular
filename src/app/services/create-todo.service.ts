import { Injectable, Input } from '@angular/core';
import { AddComponent } from '../components/add/add.component';

export class Record
{
  value!: string;
  status!: string;
  isCompleted!: boolean;
}


@Injectable({
  providedIn: 'root'
})


export class CreateTodoService {
  public records: Array<Record> =
  [
    {value: "Заметка 1", status: "Обычная", isCompleted: false},
    {value: "Заметка 2", status: "Важная", isCompleted: true},
    {value: "Заметка 3", status: "Выполненная", isCompleted: false}
  ];
  constructor() { }
  public addService(newValue: string, newStatus: string): void{
    this.records.push({value: newValue, status: newStatus, isCompleted: false});
  }
  public deleteService(value: string)
  {
    this.records = this.records.filter(record => record.value !== value)
  }
  public done(id: number){
    this.records[id].isCompleted = !this.records[id].isCompleted;
  }
}
