import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { AppRoutingModule,RoutingComponents } from './/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { PriceFormatPipe } from './pipes/price-format.pipe';
import { CartProductComponent } from './components/cart/cart-product/cart-product.component';

import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    HeaderComponent,
    PriceFormatPipe,
    CartProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
