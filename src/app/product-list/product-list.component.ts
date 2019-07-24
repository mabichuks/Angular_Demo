import { Component, OnInit } from '@angular/core';
import { ICategory } from '../services/icategory';
import { IProduct } from '../services/iproduct';
import { ProductService } from '../services/product.service';
import { TruncateTextPipe} from '../shared/truncate-text.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  imageUrl = 'http://teminik.somee.com/images/';

  products: IProduct[];
  categories: ICategory[];

  _filterParameter: string;

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data: IProduct[]) => {
        this.products = data;
      }
    );
  }

  performFilter(filterQuery: string): IProduct[] {
    filterQuery = filterQuery.toLocaleLowerCase();
    const result: IProduct[] = this.products.filter((p) => p.Name.toLocaleLowerCase().indexOf(filterQuery) !== -1);
    return result;
  }

}
