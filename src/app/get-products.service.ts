import { Injectable, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor(private http: HttpClient) { }

  products : product[] = [];

  getProducts(){
    const headerValues ={accept: "application/json", "content-type":"application/json", "access-control-allow-origin" : "*"};
    const url = "http://localhost:8080/listOfProducts";

    this.http.get<any>(url, { headers : headerValues }).subscribe(data => {
      console.log("in Data " , data);
      this.products = data;
    },error =>{
      console.log("Error occured");
    });
  }

}
