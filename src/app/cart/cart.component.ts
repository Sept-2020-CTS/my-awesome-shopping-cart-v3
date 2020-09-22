import { Component, OnInit } from '@angular/core';
import { product } from '../product.model';
import { AddProductService } from '../add-product.service';
import { PostCartService } from '../post-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productService : AddProductService, private postCartService : PostCartService) { }

  selectedProducts : product[] = [];

  ngOnInit(): void {

    this.selectedProducts= this.productService.products;
  }

  
  submitCart(){
    this.postCartService.submitCart(this.selectedProducts);
  }
}
