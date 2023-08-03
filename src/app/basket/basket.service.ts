import { IProduct } from './../shared/models/product';
import { HttpClient } from '@angular/common/http';
import { Basket, IBasket, IBasketItems, IBasketTotal } from './../shared/models/basket';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private backendUrl = environment.backendUrl;
  private shippingPrice = 0;
  //basket read only
  private basketItems = new BehaviorSubject<IBasket>(null); //next
  basketItems$ = this.basketItems.asObservable(); //subscribe

  private totalBasket = new BehaviorSubject<IBasketTotal>(null); //next
  totalBasket$ = this.totalBasket.asObservable(); //subscribe

  constructor(private http: HttpClient) {}

  getBasket(id: string) {
    return this.http.get<IBasket>(`${this.backendUrl}/basket/${id}`).pipe(
      map((basket) => {
        this.basketItems.next(basket);
        this.calculateTotal();
        return basket;
      })
    );
  }
  getCurrentBasketSource() {
    return this.basketItems.getValue();
  }
  setBasket(basket: IBasket) {
    return this.http.post<IBasket>(`${this.backendUrl}/basket`, basket).pipe(
      map((basket) => {
        this.basketItems.next(basket);
        this.calculateTotal();
        return basket;
      })
    );
  }
  deleteBasket(id: string) {
    //TODO
  }
  deleteItemFromBasket(id: number) {
    if (this.getCurrentBasketSource()) {
      const basketId = this.getCurrentBasketSource().id;
      return this.http.delete<IBasket>(`${this.backendUrl}/basket/DeleteItem/${basketId}/${id}`).pipe(
        tap((response) => {
          if (response.items.length === 0) {
            //remove all items from basket
            this.basketItems.next(null);
            this.totalBasket.next(null);
            localStorage.removeItem(environment.keyLocalStorageBasket);
          } else {
            this.basketItems.next(response);
            //update total
            this.calculateTotal();
          }
        })
      );
    }
    return of(null);
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
  increaseItemQuantity(id: number) {
    const basket = this.getCurrentBasketSource();
    const itemIndex = basket.items.findIndex((x) => x.id === id);
    if (itemIndex != -1) {
      const item = basket.items[itemIndex];
      item.quantity += 1;
      //send request
      return this.setBasket(basket);
    }
    return of(null);
  }
  decreaseItemQuantity(id: number) {
    const basket = this.getCurrentBasketSource();
    const itemIndex = basket.items.findIndex((x) => x.id === id);
    if (itemIndex != -1) {
      const item = basket.items[itemIndex];
      if (item.quantity > 1) {
        item.quantity--;
        // send req
        return this.setBasket(basket);
      } else {
        return this.deleteItemFromBasket(item.id);
      }
    }
    return of(null);
  }
  clearLocalBasket() {
    this.basketItems.next(null);
    this.totalBasket.next(null);
    localStorage.removeItem(environment.keyLocalStorageBasket);
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
  setShippingPrice(shippingPrice: number) {
    this.shippingPrice = shippingPrice;
    this.calculateTotal();
  }
  private calculateTotal() {
    const basket = this.getCurrentBasketSource();
    let subTotal = basket.items.reduce((init, item) => {
      return item.price * item.quantity + init;
    }, 0);
    let total = subTotal + this.shippingPrice;
    this.totalBasket.next({ shipping: this.shippingPrice, subTotal: subTotal, total: total });
  }
}
