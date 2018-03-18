import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';


@Injectable()
export class ShoppingkartService {

  private totalItems = new BehaviorSubject<number>(0);
  hola : number = 0;

  constructor() { }

  deleteFromShoppingKart(){  
    if(this.hola>0){
      this.hola--;
      this.totalItems.next(this.hola);
    }  
  }

  addToShoppingKart(){
      this.hola++;
      this.totalItems.next(this.hola);
  }
  getTotalItems(){     
      return this.totalItems;
  }
}
