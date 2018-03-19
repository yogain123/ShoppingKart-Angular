import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingkartService } from './shoppingkart.service';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers : [ShoppingkartService,ProductService]
})
export class ShareddModule { }
