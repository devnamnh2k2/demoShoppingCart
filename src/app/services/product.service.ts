import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

let testAPI: String = "https://run.mocky.io/v3/9ab2e6c4-2207-47b1-a4ba-dc7688807052";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private base_Url =  testAPI || 'https://localhost:7282/api/Product';
  constructor(private http: HttpClient) { }

  getAllProduct(cardId: number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.base_Url}/caid/caid=${cardId}`);
  }

  getByNameProduct(str: string): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.base_Url}/name?name=${str}`);
  } 
}
