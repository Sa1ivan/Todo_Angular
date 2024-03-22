import { Component, Input, OnInit, Output} from '@angular/core';
import { CreateTodoService, Todo } from 'src/app/services/create-todo.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})

export class RecordComponent implements OnInit{
  @Input()
  public sRecord!: Todo;

  constructor(public todoService: CreateTodoService){

  }

  ngOnInit(): void {
  }

  deleteRecord(id: number)
  {
    this.todoService.deleteRecord(id);
  }
}
