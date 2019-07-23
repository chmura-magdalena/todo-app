import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Output() newTodo = new EventEmitter<string>();

  inputValue: string = '';

  addTodo(){
    if(this.inputValue){
      this.newTodo.emit(this.inputValue)
      this.inputValue = ''
    }
  }


}
