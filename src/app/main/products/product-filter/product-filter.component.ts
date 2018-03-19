import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../sharedd/product.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories : any[];

  @Input("category") category : string;

  constructor(public router : Router, public route : ActivatedRoute, private productService : ProductService) {
    this.categories = this.productService.getAllCatogeries();    
   }

  ngOnInit() {
  }

}
