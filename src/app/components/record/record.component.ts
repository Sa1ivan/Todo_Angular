import { Component, Input, OnInit } from '@angular/core';
import { CreateTodoService, Record } from 'src/app/services/create-todo.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})

export class RecordComponent {


  constructor(public todoService: CreateTodoService){}
  ngOnInit(): void{
    
  }


}
