import { Component, OnInit } from '@angular/core';
import { ShoppingkartService } from '../../shared/shoppingkart.service';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  totalItems : number = 0;

  constructor(private shoppingkartService :ShoppingkartService) { 

  }

 ngOnInit() {
    this.shoppingkartService.getTotalItems().subscribe(item=>this.totalItems=item);
  }

}
