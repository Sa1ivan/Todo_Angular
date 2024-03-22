import { Component, Input, OnInit} from '@angular/core';
import { CreateTodoService, Todo } from 'src/app/services/create-todo.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})

export class RecordComponent implements OnInit{
  @Input()
  public sRecord!: Todo;

  constructor(public todoService: CreateTodoService){}

  ngOnInit(): void {
  }
}
