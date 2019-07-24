import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ICategory } from '../services/icategory';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private productService: ProductService) { }

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
