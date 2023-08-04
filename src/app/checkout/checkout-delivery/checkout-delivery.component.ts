import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { IDeliveryMethod } from 'src/app/shared/models/order';
import { CheckoutFormBuilderService } from '../checkout-form-builder.service';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.scss']
})
export class CheckoutDeliveryComponent implements OnInit {
  deliveryMethods: IDeliveryMethod[] = [];
  indexSelected = 0;
  constructor(private orderService: OrderService, private formBuilder: CheckoutFormBuilderService, private basketService: BasketService) {}

  ngOnInit(): void {
    this.getDeliveryMethods();
  }
  onChangeDelivery(index: number) {
    this.indexSelected = index;
    this.setDeliveryMethod(index);
    this.basketService.setShippingPrice(this.deliveryMethods[index].price);
    this.formBuilder.$formBuilder.subscribe((res) => {
      console.log(res);
    });
  }

  private setDeliveryMethod(index: number) {
    this.formBuilder.setDeliveryMethod(this.deliveryMethods[index]);
  }

  private getDeliveryMethods() {
    this.orderService.getDeliveryMethods().subscribe((res) => {
      this.deliveryMethods = res;
      this.basketService.setShippingPrice(this.deliveryMethods[0].price);
      this.setDeliveryMethod(this.indexSelected);
    });
  }
}
