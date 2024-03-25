import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreateTodoService } from 'src/app/services/create-todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit{
  inputValue!: string;
  inputStatus!: string;
  searchObj!: {value: string, status: string};

  constructor(public todoService: CreateTodoService){
  }

  ngOnInit(): void {

  }

  @Output() search = new EventEmitter<{value: string, status: string}>();
  @Output() new = new EventEmitter<{value: string, status: string}>();

  getInputsValue(inputValue: string, inputStatus: string)
  {
    return {value: inputValue, status: inputStatus};
  }

  newRecord(inputValue: string, inputStatus: string)
  {
    this.searchObj = this.getInputsValue(inputValue, inputStatus);
    this.new.emit(this.searchObj);
    this.inputValue = "";
    this.inputStatus = "";
  }

  searchRecord(inputValue: string, inputStatus: string)
  {
    this.searchObj = this.getInputsValue(inputValue, inputStatus);
    this.search.emit(this.searchObj);
    this.inputValue = "";
    this.inputStatus = "";
  }
}
