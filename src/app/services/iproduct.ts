import { ICategory } from './icategory';

export interface IProduct {
  Name: string;
  Description: string;
  ImageUrl: string;
  Price: number;
  UserRating: number;
  Category: ICategory;
  CategoryId: number;
  Id: number;
}

