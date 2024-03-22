import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreateTodoService, Todo } from 'src/app/services/create-todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit{
  inputValue!: string;
  inputStatus!: string;
  sendValue!: string;
  sendStatus!: string;
  searchObj!: {value: string, status: string};

  constructor(public todoService: CreateTodoService){
  }

  ngOnInit(): void {

  }

  @Output() search = new EventEmitter<{value: string, status: string}>();

  newRecord(inputValue: string, inputStatus: string)
  {
    this.sendValue = inputValue;
    this.sendStatus = inputStatus;
    this.todoService.newRecord(this.sendValue, this.sendStatus);
    this.inputValue = "";
    this.inputStatus = "";
  }

  searchRecord(inputValue: string, inputStatus: string)
  {
    this.sendValue = inputValue;
    this.sendStatus = inputStatus;
    this.searchObj = {value: this.sendValue, status: this.sendStatus};
    this.search.emit(this.searchObj);
    this.inputValue = "";
    this.inputStatus = "";
    }
  }
