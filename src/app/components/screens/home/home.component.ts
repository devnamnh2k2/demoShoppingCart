import { Component, OnInit, } from '@angular/core';
import { ChangeViewService } from '../../../services/change-view.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isLoading!: boolean;
  typeView: string = 'VIEW-5';
  statusSearch: boolean = false;
  constructor(private changeView: ChangeViewService) { }

  ngOnInit(): void {
    this.handleChangeView();
  }


  handleChangeStatus(){
    this.statusSearch = true;
    console.log(this.statusSearch);
  }

  handleChangeView() {
    this.changeView.currentType.subscribe(type => {
      if(type !== ''){
        this.typeView = type;
      }
      console.log(this.typeView);
    })
  }
}
