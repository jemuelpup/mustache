import { Injectable } from '@angular/core';
import { ProductItem } from '../models/product-items';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	cartData: ProductItem[];

  constructor() { }
}
