import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';
import { CartService } from '../../../services/cart.services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  private count:number = 0;
  private isOpen:boolean =false;
  private previewFlag:boolean = false;
  private inVoiceNo !:number;
  constructor(private cartService:CartService) { 

  }

  ngOnInit() {

    this.cartService.cartUpdates$.subscribe(()=>{
      this.count= this.cartService.count;
    });
  }
  // private openCart():void{
  //   this.isOpen = true;
  // }
  // private closeCart():void{
  //   this.isOpen = false;
  //   this.previewFlag = false;
  // }
  // private removeProduct(item: Product) :void{
  //   console.log(this.cartService)
  //   this.cartService.cartItmes.splice(this.cartService.cartItmes.findIndex(element=>item.productId === element.id),1);
  //   this.count= this.cartService.count;
  // }
  // private chngQuantity():void{
  //   this.count= this.cartService.count;     
  // }
  // private preview() :void{
  //   this.previewFlag = true;
  //   this.inVoiceNo = this.getRandomInt(23443, 23432555);
  // }
 
  // private getRandomInt(min, max) {
  //       return Math.floor(Math.random() * (max - min + 1)) + min;
  //   }

}