import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailListComponent } from './product-detail-list/product-detail-list.component';
import { CategoryComponent } from './category/category.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ErrorComponent } from './shared/error.component';
import { NewcomComponent } from './newcom/newcom.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailListComponent,
    CategoryComponent,
    ProductByCategoryComponent,
    ErrorComponent,
    NewcomComponent,
  ],
  imports: [
  BsDropdownModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'mycom', component: NewcomComponent},
      {path: 'products', component: ProductListComponent},
      {path: 'category', component: CategoryComponent },
      {path: 'category/:id', component: ProductByCategoryComponent},
      {path: 'products/:id', component: ProductDetailListComponent},
      {path: '404', component: ErrorComponent},
      {path: '', redirectTo: 'products', pathMatch: 'full'},
      {path: '**', redirectTo: 'products', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
