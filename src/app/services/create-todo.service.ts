import { Injectable, Input } from '@angular/core';
import { AddComponent } from '../components/add/add.component';

export class Record
{
  value!: string;
  status!: string;
}


@Injectable({
  providedIn: 'root'
})


export class CreateTodoService {
  public records: Array<Record> =
  [
    {value: "Заметка 1", status: "Обычная"},
    {value: "Заметка 2", status: "Важная"},
    {value: "Заметка 3", status: "Выполненная"}
  ];
  constructor() { }
  public addService(newValue: string, newStatus: string): void{
    this.records.push({value: newValue, status: newStatus});

  }
  @Input()
  inputValue = ''
}
