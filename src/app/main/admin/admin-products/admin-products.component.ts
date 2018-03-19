import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { DataTableResource } from 'angular-4-data-table';
import { ProductService } from '../../../shared/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

 // allProducts : Product[];    //good to have like this
  allProducts : any[];
  query : string;
  filteredArray : any[];
  itemResource = new DataTableResource(this.allProducts);
  items = [];
  itemCount = 0;

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.allProducts = this.productService.getAllData();
    this.filteredArray = this.allProducts;

    this.initilizeTable(this.filteredArray);

  }

  reloadItems(params) {
    if(!this.itemResource)
      return;
    this.itemResource.query(params).then(items => this.items = items);
}

  initilizeTable(filterArr : any[]){

  this.itemResource = new DataTableResource(filterArr);
  this.itemResource.query({offset:0}).then(items => this.items = items);
  this.itemResource.count().then(count => this.itemCount = count);    

}

  filter(){
    console.log(this.query);
    this.filteredArray = this.productService.getAllData().filter(item=>item.price==this.query);
    this.initilizeTable(this.filteredArray);
    if(this.query==""){
      this.initilizeTable(this.allProducts);
    }
  }

}
