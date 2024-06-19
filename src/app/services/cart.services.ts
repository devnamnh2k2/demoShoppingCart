import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../interfaces/cart.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();



  constructor(private http: HttpClient) { }

  public getAllPro_CardByCardId(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>("https://localhost:7282/api/Product_Card_Controllers/id?CardId=1");
  }
}