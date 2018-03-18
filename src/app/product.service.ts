import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  data : any[] = [{"title":"Bread","price":23,"category":"Fruits","imageUrl":"https://secure.i.telegraph.co.uk/multimedia/archive/01863/bread_1863824c.jpg"},
  {"title":"Dairy","price":23,"category":"Fruits","imageUrl":"https://eatforwellness.com.au/wp-content/uploads/2016/07/dairy.jpg"},
  {"title":"Vegetables","price":23,"category":"Fruits","imageUrl":"https://www.builtlean.com/wp-content/uploads/2012/06/eat-more-vegetables-1.jpg"},
  {"title":"Vegetables","price":23,"category":"Fruits","imageUrl":"https://www.puraforceremedies.com/wp-content/uploads/2016/04/tomatoes-600x400.jpg"},
  {"title":"Bread","price":23,"category":"Fruits","imageUrl":"https://d2gk7xgygi98cy.cloudfront.net/6667-3-large.jpg"},
  {"title":"Fruits","price":23,"category":"Fruits","imageUrl":"https://www.sanlucar.com/wp/wp-content/uploads/2016/11/Melone_Wassermelone.jpg"},
  {"title":"Fruits","price":23,"category":"Fruits","imageUrl":"http://www.cancel-fruits.fr/wp-content/themes/cancel-fruits/images/img2.jpg"},
  {"title":"Bread","price":23,"category":"Fruits","imageUrl":"https://images-na.ssl-images-amazon.com/images/I/41kESUHJJUL._SX355_.jpg"}]
  
  categories = [{"name":"Bread"},
  {"name":"Dairy"},
   {"name":"Fruits"},
   {"name":"Vegetables"},
 ];

  constructor() { }

  setAllData(item){
    this.data.push(item);
  }

  getAllData(){    
    return this.data;
  }

  updateData(id,obj){
    let index = this.data.findIndex(item=>item.title==id);
    this.data.splice(index,1,obj);
  }

  deleteData(id){
    let index = this.data.findIndex(item=>item.title==id);
    this.data.splice(index,1);
  }

  getAllCatogeries(){
    return this.categories;
  }

}
