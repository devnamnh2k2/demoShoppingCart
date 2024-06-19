import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product.interface';
import { Location } from '@angular/common';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  productList: Product[] = [];
  @Input() type!: string;
  @Input() status: boolean = false;
  @Output() statusChange = new EventEmitter<boolean>();
  constructor(private productService: ProductService, private searchService: SearchService, private location: Location) { }




  ngOnInit(): void {
    this.getProductByCategory();
    // this.handleSearch();
  }


  getProductByCategory() {
    let cardId = this.location.path().toString();
    let arrurlSlug = cardId.split('-');
    const carId = Number(arrurlSlug[arrurlSlug.length - 1]);
    this.productService.getAllProduct(carId).subscribe((res: Product[]) => {
      this.productList = res;
      console.log(res);
    })
  }

  // handleSearch() {
  //   this.searchService.search$.subscribe(searchTerm => {
  //     if (searchTerm) {
  //       console.log(searchTerm,'--',this.status);
  //       this.statusChange.emit(true);
  //       this.searchProductByName(searchTerm)
  //     }
  //     console.log(searchTerm,'--',this.status);
  //   });
  // }




  // searchProductByName(str: string) {
  //   this.productService.searchProductByName(str).subscribe((res) => {
  //     this.productList = res;
  //   // console.log(this.productList);
  //   });
  // }
}
