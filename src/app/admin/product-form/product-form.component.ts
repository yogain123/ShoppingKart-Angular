import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  form = new FormGroup({
    title : new FormControl('',[Validators.required]),
    price : new FormControl(0,[Validators.required,Validators.min(0)]),
    category : new FormControl('',[Validators.required]),
    imageUrl : new FormControl('',[Validators.required,CustomValidators.url]),
  });

  inEditStatus : boolean = false;
           
  categories = [{"name":"Bread"},
                 {"name":"Dairy"},
                  {"name":"Fruits"},
                  {"name":"Vegetables"},
                ];
  allProducts : any[];

  constructor(private productService : ProductService, private router : Router, private route : ActivatedRoute) { 
    console.log("constructor");

  }  
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    if(id){
      this.inEditStatus = true;
      let obj = this.productService.getAllData().find(item=>item.title==id);
      this.form.patchValue(obj);
    }      
    
  }

  delete(){
    let id = this.route.snapshot.paramMap.get("id");
    this.productService.deleteData(id);
    this.router.navigate(["/admin/products"]);
  }

  get title(){
    return this.form.get("title");
  }

  get price(){
    return this.form.get("price");
  }

  get category(){
    return this.form.get("category");
  }

  get imageUrl(){
    return this.form.get("imageUrl");
  }

  save(){
    let id = this.route.snapshot.paramMap.get("id");
    if(!id){
    this.productService.setAllData(this.form.value);
    this.router.navigate(["/admin/products"]);
    }
    else{
      this.productService.updateData(id,this.form.value);
      this.router.navigate(["/admin/products"]);
    }
  }


  default(){
    let obj = {"title":"","price":23,"category":"Fruits","imageUrl":"https://images-na.ssl-images-amazon.com/images/I/41kESUHJJUL._SX355_.jpg"}
    this.form.patchValue(obj);
  }
}
