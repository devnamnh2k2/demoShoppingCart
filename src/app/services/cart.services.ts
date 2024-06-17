import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
import { CartItem } from '../interfaces/cart.interface';
import { Product } from '../interfaces/product.interface';


@Injectable()
export class CartService {

  

  private cartUpdates = new Subject<string>();
  public cartUpdates$ = this.cartUpdates.asObservable();

  public cartItmes:CartItem[] =[];
  public get count():number {
    return this.cartItmes.reduce((c,t1) => t1.quantity+c,0);
    
  };
  

  constructor() { 

  }

  add(product:Product){


   //test
   
  }

}