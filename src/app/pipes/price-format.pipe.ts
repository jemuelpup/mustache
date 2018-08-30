import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {

  transform(value: number, currency?: string): any {
  	let cur = "";
  	if(currency=="USD"){
  		cur = "$";
  	}

    return cur+value.toFixed(2).toLocaleString().split(/\s/).join(',');
  }

}
