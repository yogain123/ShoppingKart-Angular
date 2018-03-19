import { ShareddModule } from './../sharedd/sharedd.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular-4-data-table';
import { CustomFormsModule } from 'ng2-validation';
import { ShoppingkartService } from '../sharedd/shoppingkart.service';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductService } from '../sharedd/product.service';
import { Hola1Component } from './products/hola1/hola1.component';
import { Hola2Component } from './products/hola2/hola2.component';

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
    Hola1Component,
    Hola2Component,
  ],
  imports: [
    BrowserModule,
    ShareddModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    DataTableModule,
    RouterModule.forRoot([
      {path : "", component: ProductsComponent},
      {path: "products", component: ProductsComponent, children:[
        {path : "hola1",component:Hola1Component},
        {path : "hola2",component:Hola2Component}
      ]},
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
