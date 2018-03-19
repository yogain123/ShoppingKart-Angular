import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import {CustomFormsModule} from 'ng2-validation';
import {DataTableModule} from 'angular-4-data-table';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from '../shared/product.service';
import { ShoppingkartService } from '../shared/shoppingkart.service';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    DataTableModule,
    RouterModule.forRoot([
      {path : "", component: ProductsComponent},
      {path: "products", component: ProductsComponent},
      {path: "shopping-cart", component: ShoppingCartComponent},
      {path: "check-out", component: CheckOutComponent},
      {path: "order-success", component: OrderSuccessComponent},
      {path: "login", component: LoginComponent},

      {path: "admin/orders", component: AdminOrdersComponent},
      {path: "admin/products/new", component: ProductFormComponent},
      {path: "admin/products/:id", component: ProductFormComponent},
      {path: "admin/products", component: AdminProductsComponent},


      {path:"my/orders", component : MyOrdersComponent}


    ])
  ],
  providers: [ProductService, ShoppingkartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
