import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './components/layout/mainlayout/mainlayout.component';
import { HomeComponent } from './components/screens/home/home.component';
import { ProductComponent } from './components/screens/product/product.component';
import { CartComponent } from './components/screens/cart/cart.component';
import { ProductDetailComponent } from './components/screens/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shoppingCartDemo',
    pathMatch: 'full',
  },
  {
    path: 'shoppingCartDemo',
    component: MainlayoutComponent,
    children: [
    { path: '', component: HomeComponent },
    { path: 'cart', component: CartComponent },
    { path: ':slug', component: ProductComponent },
    { path: ':slug/:id', component: ProductDetailComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
