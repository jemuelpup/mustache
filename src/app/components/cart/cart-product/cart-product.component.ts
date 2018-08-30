import { Component, OnInit, Input } from '@angular/core';
import { PriceFormatPipe } from '../../../pipes/price-format.pipe';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
	@Input() cartItem;

  constructor() { }

  ngOnInit() {
  }

}
