import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { IProduct } from '../services/iproduct';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit {

  products: IProduct[];
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
  }

  imageUrl = 'http://teminik.somee.com/images/';

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe();
    this.activatedRoute.params.subscribe( routeParams => {
      // tslint:disable-next-line:radix
      this.getProductByCategory(parseInt(routeParams.id));
      console.log(routeParams.id);
      }
    );
  }

  getProductByCategory(id: number) {
   this.productService.getProductByCategory(id).subscribe(
     data => {
       this.products = data;
     },
   );
   console.log(this.products);
  }

}
