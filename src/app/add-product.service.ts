import { Injectable } from '@angular/core';
import { product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  products: product[] = [];

  constructor() { }

  addProduct(name: string, qty : number){
    console.log("Inside service addproduct ", name, qty);
    this.products.push(new product(name, qty));
    console.log("Products ", this.products);
  }
}
