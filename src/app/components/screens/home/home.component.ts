import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Category } from '../../../interfaces/category.interface';
import { CategorySevice } from '../../../services/category.service';
import { ProductService } from '../../../services/product.service';
import { SearchService } from '../../../services/search.service';
import { Product } from '../../../interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  listCategory: Category[] = [];
  searchProduct: Product[] = [];
  isLoading!: boolean;
  constructor(private categoryService: CategorySevice, private router: Router,private productService: ProductService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.searchService.search$.subscribe(searchTerm => {
      this.handleSearch(searchTerm);
    });
  }

  getAllCategory() {
    this.isLoading = true;
    this.categoryService.getAllCategory().subscribe((res: Category[]) => {
      this.listCategory = res;
      this.isLoading = false;
    });
  }

  handleSearch(searchTerm: string) {
    console.log(searchTerm);
    this.router.navigate(['/'])
    
    // this.productService.getByNameProduct(searchTerm).subscribe((res: Product[]) => {
    //   this.searchProduct = res;
    // })

  }
}
