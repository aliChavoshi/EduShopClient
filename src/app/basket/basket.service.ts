import { HttpClient } from '@angular/common/http';
import { IBasket } from './../shared/models/basket';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private backendUrl = environment.backendUrl;
  //basket read only
  private basketItems = new BehaviorSubject<IBasket>(null); //next
  basketItems$ = this.basketItems.asObservable(); //subscribe

  constructor(private http: HttpClient) {}

  getBasket(id: string) {}
  setBasket(basket: IBasket) {}
  deleteBasket(id: string) {}
  
  getCurrentBasketSource() {
    return this.basketItems.getValue();
  }
}
