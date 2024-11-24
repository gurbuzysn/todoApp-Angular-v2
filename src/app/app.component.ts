import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  isDisplay = false;  

  addItem(value : string){
    if(value != ""){
      this.model.items.push(new TodoItem(value,false));
    }
  }

  filterItems(){
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter(item => !item.status)
  }

}
