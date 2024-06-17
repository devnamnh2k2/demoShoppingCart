import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() isShowContent: boolean = true;
}
