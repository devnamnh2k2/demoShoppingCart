import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category.interface';

let testAPI: String = "https://d3f0c07bc99b4a46b0279b588c25a172.api.mockbin.io/";
@Injectable({
  providedIn: 'root'
})
export class CategorySevice {

  private base_Url =  testAPI || 'https://localhost:7282/api/Category';
  constructor(private http: HttpClient) { }

  getAllCategory() : Observable<Category[]> {
    return this.http.get<Category[]>(`${this.base_Url}`);
  }
}
