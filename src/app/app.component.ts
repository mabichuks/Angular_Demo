import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { ICategory } from './services/icategory';
import { IProduct } from './services/iproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private productService: ProductService) {}

  pagetitle = 'Cyber Store';
  pageDescription = 'Quality Products You Can Afford';
  imageUrl = 'http://teminik.somee.com/images/';

  products: IProduct[];
  categories: ICategory[];

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe(
      (data: ICategory[]) => {
        this.categories = data;
      }
    );
    console.log(this.categories);
  }


}
