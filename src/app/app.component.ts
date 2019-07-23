import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  newTodo: string = ''

  addToList(todo: string){
    this.newTodo = todo
  }
}
