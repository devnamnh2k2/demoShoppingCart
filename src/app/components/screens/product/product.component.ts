import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  productList: Product[] = [];
  constructor(private productService: ProductService, private location: Location){}

  ngOnInit(): void {
    this.getProductByCategory();
  }

  getProductByCategory(){
    let cardId = this.location.path().toString();
    let arrurlSlug = cardId.split('-');
    const carId = Number(arrurlSlug[arrurlSlug.length - 1]);
    this.productService.getAllProduct(carId).subscribe((res: Product[]) => {
      this.productList = res;
      console.log(res);
    })
  }

}
