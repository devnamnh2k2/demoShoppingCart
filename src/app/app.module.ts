import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProductComponent } from './components/screens/product/product.component';
import { ProductDetailComponent } from './components/screens/product-detail/product-detail.component';
import { CartComponent } from './components/screens/cart/cart.component';
import { MainlayoutComponent } from './components/layout/mainlayout/mainlayout.component';
import { HomeComponent } from './components/screens/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShareModule } from './components/share/share/share.module';
import { SideBarComponent } from './components/common/side-bar/side-bar.component';
import { BreadcrumbComponent } from './components/common/breadcrumb/breadcrumb.component';
import { CardComponent } from './components/common/card/card.component';
import { FormElementComponent } from './components/common/form-element/form-element.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    CartComponent,
    MainlayoutComponent,
    SideBarComponent,
    BreadcrumbComponent,
    CardComponent,
    FormElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ShareModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
