import { BasketService } from './../../../basket/basket.service';
import { IProduct } from './../../models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-shop',
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.scss']
})
export class CardShopComponent implements OnInit {
  @Input() product: IProduct;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {}
  addItemToBasket() {
    this.basketService.addItemToBasket(this.product).subscribe((res) => {
      // console.log(res);
    });
  }
}
