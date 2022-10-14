import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket.service';
import { IBasket, IBasketItems } from '../shared/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket$: Observable<IBasket>;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.basket$ = this.basketService.basketItems$;
  }
  increaseItemQuantity(item: IBasketItems) {}
  decreaseItemQuantity(item: IBasketItems) {}
}
