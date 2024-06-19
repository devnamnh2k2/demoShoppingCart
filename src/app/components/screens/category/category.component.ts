import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../interfaces/category.interface';
import { CategorySevice } from '../../../services/category.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{
  listCategory: Category[] = [];
  @Input() type!: string;
  isLoading!: boolean;
  constructor(private categoryService: CategorySevice, private location: Location){}

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.isLoading = true;
    this.categoryService.getAllCategory().subscribe((res: Category[]) => {
      this.listCategory = res;
      this.isLoading = false;
    });
  }
}
