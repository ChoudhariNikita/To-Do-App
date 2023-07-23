import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'To-Do-App';
  itemList = [' '];
  // itemList: { name: string; completed: boolean }[] = [];
  itemName = '';
  count = 0;
  see = true;
  chkstat = false;
  decor = 'none';

  addItem() {
    if (this.count == 0) {
      this.itemList.pop();
    }

    if (this.itemName != '') {
      this.itemList.push(this.itemName);
      this.see = false;
      this.itemName = '';
      this.count = 1;
    }
  }

  deleteItem() {
    if (this.chkstat === true) {
      this.see = true;
    }
  }

  getDecor() {
    this.decor = 'line-through';
  }
}
