import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.services';
import { CartItem } from '../../../interfaces/cart.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  cartTotal:number = 0;
   listProductAvaiable: CartItem[] = [];
  constructor(private cartService:CartService) { 

  }

  ngOnInit() {
    this.getAllPoroduct();
    // this.cartService.cartUpdates$.subscribe(()=>{
    //   this.count= this.cartService.count;
    // });
  }

  getAllPoroduct(){
    this.cartService.getAllPro_CardByCardId().subscribe({
      next: (cartItems) => {
        this.listProductAvaiable = cartItems;
        // Calculate initial cart total (optional)
        this.cartTotal = this.calculateCartTotal(cartItems);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error fetching cart items:', error);
        // Handle API errors gracefully (optional)
        // e.g., display an error message to the user
      }
    })
  }

  calculateCartTotal(cartItems: CartItem[]): number {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}