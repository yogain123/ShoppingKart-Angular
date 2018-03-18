import { Product } from './../models/product';
import { ShoppingkartService } from './../shoppingkart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input("eachProduct") eachProduct : Product;

  totalItems : number; 

  constructor(private shoppingkartService: ShoppingkartService) { 
  }
  ngOnInit() {
  }
  delete(){
    this.shoppingkartService.deleteFromShoppingKart();
  }
  add(){
    this.shoppingkartService.addToShoppingKart();
  }
}
