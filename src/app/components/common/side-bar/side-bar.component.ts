import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  showFiller: boolean = false;
  @ViewChild('drawer') d!: MatDrawer;
  handleToggleSlide() {
    this.d.toggle();
  }
}
