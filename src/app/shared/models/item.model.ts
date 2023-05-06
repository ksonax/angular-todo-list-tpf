import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomObjectService {
  customObject: any;
}

export class Item {
  id: number;
  description: string;
  done: boolean;

  constructor(id: number, description: string, done: boolean){
    this.description = description;
    this.id = id;
    this.done = done;
  }
}