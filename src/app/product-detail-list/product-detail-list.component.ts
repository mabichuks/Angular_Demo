import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { IProduct } from '../services/iproduct';

@Component({
  selector: 'app-product-detail-list',
  templateUrl: './product-detail-list.component.html',
  styleUrls: ['./product-detail-list.component.css']
})
export class ProductDetailListComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private productService: ProductService ) { }

  imageUrl = 'http://teminik.somee.com/images/';

  product: IProduct;

  ngOnInit() {
    const parameter: string = this.activatedRoute.snapshot.paramMap.get('id');
    if (parameter) {
      const id: number = parseInt(parameter, null);
      this.getSingleProduct(id);
      console.log(id);
    }
  }

  getSingleProduct(id: number): void {
    this.productService.getSingleProduct(id).subscribe(
      (data: IProduct) => {
        this.product = data;
      }
    );
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
