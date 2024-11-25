import { Component } from '@angular/core';
import { Model, TodoItem } from './model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  isDisplay = false;  
  todoForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.todoForm = this.fb.group({
      todoItemText: ['', [Validators.required, Validators.minLength(3)]],
    });
  }


  addItem(): void{
    const value = this.todoForm.value.todoItemText;
    if(this.todoForm.valid && value){
      this.model.items.push(new TodoItem(value, false));
      this.todoForm.reset();
    }
  }

  filterItems(){
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter(item => !item.status)
  }

}
