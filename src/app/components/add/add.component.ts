import { Component } from '@angular/core';
import { CreateTodoService } from 'src/app/services/create-todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent {
  constructor(public todoService: CreateTodoService){}
  inputValue!: string;
  inputStatus!: string;
  sendValue!: string;
  sendStatus!: string;

  newRecord(inputValue: string, inputStatus: string)
  {
    this.sendValue = inputValue;
    this.sendStatus = inputStatus;
    this.todoService.newRecord(this.sendValue, this.sendStatus);
    this.inputValue = "";
    this.inputStatus = "";
  }
}
