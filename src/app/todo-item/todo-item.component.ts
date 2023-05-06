import { Component, Input } from '@angular/core';
import {Item, CustomObjectService} from "../shared/models/item.model";
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  constructor(private customObjectService: CustomObjectService) {}
  
  ngOnInit() {
    const customObject = this.customObjectService.customObject;
    // Use the customObject in the receiving component
  }
  
  get customObject(): any {
    return this.customObjectService.customObject;
  }
}
