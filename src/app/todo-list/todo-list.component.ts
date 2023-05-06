import { Component, EventEmitter, Output, Injectable} from '@angular/core';
import {Item, CustomObjectService} from "../shared/models/item.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class TodoListComponent {
  constructor(private customObjectService: CustomObjectService) {}
  @Output() messageSent = new EventEmitter<Item>();

  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    new Item(1, 'Do dishes', true),
    new Item(2, 'Study for exam', false),
    new Item(3, 'Exercise', false),
    new Item(4, 'Finish project', false),
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string) {
    let item = new Item(this.allItems.length+1, description, false);
    this.allItems.push(item);
  }
  deleteItem(id: number) {
    this.allItems.splice(id, 1)
  }

  changeState(id: number) {
    let index = this.allItems.findIndex((obj => obj.id == id));
    this.allItems[index].done = !this.allItems[index].done;
  }

  emitItem(item: Item){
    this.customObjectService.customObject = item;
  }
}
