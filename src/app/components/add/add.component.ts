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
}
