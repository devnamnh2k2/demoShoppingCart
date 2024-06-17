import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.scss'
})
export class MainlayoutComponent implements OnInit {
  isShowBanner: boolean = true;
  isShowFilter: boolean = true; 
  chooseMenu: string = 'MENU';
  searchNameProduct: string = '';
  
  filterForm: FormGroup = new FormGroup({
    sort: new FormControl(''),
    price: new FormControl('')
  });
  constructor(private location: Location, private searchService: SearchService) { }

  handleChooseSideBar(drawer: MatDrawer,nameStr: string) {
    this.chooseMenu = nameStr;
    drawer.position = nameStr === "MENU" ? "start" : "end";
    drawer.toggle();
  }

  handleSubmit(){
    this.searchService.setSearchTerm(this.searchNameProduct);
  }

ngOnInit(): void {
  this.isShowBanner =  this.location.path().toString() === '/shoppingCartDemo';
 this.isShowFilter = this.location.path().toString().split('/').length !== 4;
  }
}
