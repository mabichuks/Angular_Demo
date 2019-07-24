import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { IProduct } from './iproduct';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductlistresolverService implements Resolve<any> {

  constructor(private productService: ProductService) { }

  resolve() {
  }
}
