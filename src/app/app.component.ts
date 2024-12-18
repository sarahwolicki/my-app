import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from './item';
import { ItemComponent } from './item/item.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  componentTitle = 'My To Do List';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'rave', done: false },
    { description: 'repeat', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }

  addItem(description: string) {
    if (!description) return;

    this.allItems.push({ description, done: false });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
