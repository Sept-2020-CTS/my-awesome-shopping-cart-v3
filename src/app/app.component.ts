import { Component, OnInit } from '@angular/core';
import { GetProductsService } from './get-products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-awesome-shopping-cart-v3';

  constructor(private getProductsService : GetProductsService){};

  ngOnInit(){
    this.getProductsService.getProducts();
  }
}
