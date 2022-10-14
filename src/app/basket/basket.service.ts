import { IProduct } from './../shared/models/product';
import { HttpClient } from '@angular/common/http';
import { Basket, IBasket, IBasketItems } from './../shared/models/basket';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
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

  getBasket(id: string) {
    return this.http.get<IBasket>(`${this.backendUrl}/basket/${id}`).pipe(
      map((basket) => {
        this.basketItems.next(basket);
        return basket;
      })
    );
  }
  setBasket(basket: IBasket) {
    return this.http.post<IBasket>(`${this.backendUrl}/basket`, basket).pipe(
      map((basket) => {
        this.basketItems.next(basket);
        return basket;
      })
    );
  }
  deleteBasket(id: string) {
    //TODO
  }

  addItemToBasket(product: IProduct, quantity = 1) {
    //product => IBasketItem
    const itemToAdd: IBasketItems = this.mapProductToBasketItem(product, quantity);
    //Exist basket ? true |  false
    const basket = this.getCurrentBasketSource() ?? this.createBasket();
    //IBasketItem => Add Basket | update
    basket.items = this.addOrUpdateBasketItems(itemToAdd, basket.items, quantity);
    //create Basket send request to backend
    return this.setBasket(basket);
  }
  private mapProductToBasketItem(product: IProduct, quantity: number): IBasketItems {
    return {
      id: product.id,
      brand: product.productBrand,
      discount: 0,
      pictureUrl: product.pictureUrl,
      price: product.price,
      product: product.title,
      quantity: quantity,
      type: product.productType
    };
  }
  private createBasket() {
    const basket = new Basket();
    localStorage.setItem(environment.keyLocalStorageBasket, basket.id);
    return basket;
  }
  private addOrUpdateBasketItems(itemToAdd: IBasketItems, items: IBasketItems[], quantity: number): IBasketItems[] {
    //id == productId
    const index = items.findIndex((x) => x.id === itemToAdd.id);
    if (index === -1) {
      //new basket item
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else {
      //update basket Items in basket
      items[index].quantity += quantity;
    }
    return items;
  }
  getCurrentBasketSource() {
    return this.basketItems.getValue();
  }
}
