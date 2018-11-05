import { Injectable } from "@angular/core";
import { APART } from './data-service';

@Injectable()
export class ApService {
  private apart: any;

  constructor(){
    this.apart = APART;
  }

  getAll(){
    return this.apart;
  }

  getItem(id) {
    for (var i = 0; i < this.apart.length; i++) {
      if (this.apart[i].id === parseInt(id)) {
        return this.apart[i];
      }
    }
    return null;
  }
}
