import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';


const routes: Routes = [
	{ path: '', redirectTo: 'product', pathMatch: 'full' },
	{ path: 'product', component: ProductComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ useHash: true }) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

export const RoutingComponents = [
	ProductComponent,
];