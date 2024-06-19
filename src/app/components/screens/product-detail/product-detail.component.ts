import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{
product?: Product
id!: number;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService){}

  ngOnInit(): void {
    const productName = this.activatedRoute.snapshot.params['slug'];
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    this.handleProductDetail(productName);
  }

  handleProductDetail(str: string){
    this.productService.getByNameProduct(str).subscribe((item) => {
      this.product = item;
    })
  }

  handleAddToCart(){
    this.productService.addToCart(this.id).subscribe(item => console.log(item));
    alert('add successfully!')
  }
}
