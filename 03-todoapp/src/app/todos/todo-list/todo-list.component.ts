import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos:Todo[]=[];

  constructor(private store: Store<AppState>){

  }

  ngOnInit(): void {
    this.store.select('todos')
      .subscribe(todos => this.todos = todos);
  }
}
