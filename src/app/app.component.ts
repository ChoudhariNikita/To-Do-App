import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do-App';
  itemList = ['Learn React', 'Create Portfolio'];
  itemName = '';

  addItem() {
    this.itemList.push(this.itemName);
  }
}
