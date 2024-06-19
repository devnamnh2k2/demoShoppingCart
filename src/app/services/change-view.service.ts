import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeViewService {
  private typeSubject = new BehaviorSubject<string>('');
  currentType  = this.typeSubject.asObservable();
  
  constructor() { }

  setTypeView(type: string){
    this.typeSubject.next(type);
  }
}
