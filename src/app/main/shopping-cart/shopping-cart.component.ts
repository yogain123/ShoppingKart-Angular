import { Component, OnInit } from '@angular/core';
import { ShoppingkartService } from '../../sharedd/shoppingkart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingkartService : ShoppingkartService) { }

  ngOnInit() {
  }

}
