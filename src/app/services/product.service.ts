import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import { IProduct } from './iproduct';
import { ICategory } from './icategory';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

private categoryUrl = 'http://teminik.somee.com/api/category/all';
private productUrl = 'http://teminik.somee.com/api/product/all';
  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.productUrl).pipe(
      catchError(this.handleError)
    );
  }


  getAllCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.categoryUrl).pipe(
      catchError(this.handleError)
    );
  }

  getSingleProduct(productId: number): Observable<IProduct | undefined> {
    return this.getAllProducts().pipe(
      map((product: IProduct[]) => product.find(p => p.Id === productId)),
      tap((product: IProduct) => console.log(product))
    );
  }

  getSingleCategory(categoryId: number): Observable<ICategory | undefined> {
    return this.getAllCategories().pipe(
      map((category: ICategory[]) => category.find(c => c.Id === categoryId))
    );
  }


  getProductByCategory(categoryId: number): Observable<IProduct[]> {
    return this.getAllProducts().pipe(
      map((product) => product.filter(p => p.Category.Id === categoryId)),
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = '';
    if (errorResponse.error instanceof ErrorEvent) {
      errorMessage = `An error occured ${errorResponse.error.message}`;
    } else {
      errorMessage = `Server returned code ${errorResponse.status}, and message ${errorResponse.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
