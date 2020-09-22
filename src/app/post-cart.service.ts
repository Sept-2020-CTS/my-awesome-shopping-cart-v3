import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostCartService {

  constructor(private http: HttpClient) { }

  submitCart(products){
    const headerValues ={accept: "application/json", "content-type":"application/json", "access-control-allow-origin" : "*"};
    const url = "http://localhost:8080/submitCart";

    this.http.post<any>(url, products, { headers : headerValues }).subscribe(data => {
      console.log("in Data " , data);
      
    },error =>{
      console.log("Error occured");
    });
  }

}
