import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { map } from 'rxjs/operators';


let testAPI: String = "https://bf32ed657e7f4d0098abfd46d67f0284.api.mockbin.io";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private base_Url = testAPI || 'https://localhost:7282/api/Product';

  constructor(private http: HttpClient) { }

  getAllProduct(cardId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.base_Url}/caid/caid=${cardId}`);
  }

  getByNameProduct(str: string): Observable<Product> {
    return this.http.get<Product>(`${this.base_Url}/name?name=${str}`);
  }

  searchProductByName(str: string): Observable<Product[]> {
    return this.getAllProduct(2) // Use dedicated endpoint or modify existing
      .pipe(
        map(products => products.filter(product => product.productName.toLowerCase().includes(str.toLowerCase())))
      );
  }

  addToCart(id: number){
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { title: 'Angular POST Request Example' };
    return this.http.post(`https://localhost:7282/api/Product_Card_Controllers?cardid=1&productid=${id}`, body, {headers});
  }
}
