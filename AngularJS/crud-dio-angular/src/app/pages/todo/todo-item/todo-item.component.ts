import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() remove = new EventEmitter
  constructor() {this.todo = new Todo(0, '', false)}

  ngOnInit(): void {
    if(this.todo.title === ''){
      alert('Tarefa vazia.');
      reportError('Item não adicionado na lista!')
    }
  }

  removeTodo(): void {
    this.remove.emit(this.todo);
  }

  markAsDone(): void {
    this.todo.done = true;
  }

}
