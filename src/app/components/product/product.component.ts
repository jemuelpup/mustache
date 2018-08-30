import { Component, OnInit } from '@angular/core';
import { PriceFormatPipe } from '../../pipes/price-format.pipe';
import { ProductItem } from '../../models/product-items';
import { CartService } from '../../services/cart.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})


export class ProductComponent implements OnInit {
	cartData: ProductItem[];
	productItem: ProductItem;
	// product details
	productName: string;
	price: number;
	productDesc: string;
	productImage: string;
	size: {
		name: string;
		selected: boolean;
	}[];
	selectedSize = "";
	selectedSizeIndex = -1;

	constructor(
		public cartService: CartService
	) { }

	ngOnInit() {
		this.cartService.cartData = [];
		this.productName = "Classic Tee";
		this.price = 75;
		this.productImage="assets/images/products/classic-tee.jpg";
		this.productDesc = "Dolor sit amet, consectetur adipisicing elit. Quibusdam eaque, quo, necessitatibus repudiandae soluta a architecto, animi earum voluptates sed, nemo eligendi beatae illo! Maiores dolorum nemo repudiandae accusamus temporibus.";
		this.size = [
		{
			name:"S",
			selected:false
		},
		{
			name:"M",
			selected:false
		},
		{
			name:"L",
			selected:false
		}
		];
	}
	pickSize(size: string, index: number){
		if(this.size[index].selected){// if selected
			this.size[index].selected = false;
			this.selectedSize = "";
		}
		else{
			this.size.map(s=>s.selected=false);
			this.size[index].selected = true;
			this.selectedSize = size;
		}
	}
	addToCart(){
		if(this.selectedSize==""){
			alert("Select size first");
		}
		else{
			var found = false;
			this.cartService.cartData.forEach((e,i)=>{
				if(e.size==this.selectedSize){
					e.quantity++;
					found = true;
					return false;
				}
			});
			if(!found){
				this.productItem = {
					name: this.productName,
					price: this.price,
					quantity: 1,
					size: this.selectedSize,
					productImage: "assets/images/products/classic-tee.jpg"
				}
				this.cartService.cartData.push(this.productItem);
			}
			alert("Product added to the cart");
		}
		console.log(this.cartService.cartData);
	}

}
