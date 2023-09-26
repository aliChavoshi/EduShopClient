import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { IOrder } from 'src/app/shared/models/order';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {
  private sub = new Subscription();
  orders: IOrder[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.getOrdersForCurrentUser();
  }

  getOrdersForCurrentUser() {
    const sub$ = this.profileService.getOrdersForClient().subscribe((res) => {
      this.orders = res;
      console.log(res);

    });
    this.sub.add(sub$);
  }

  showOrder(orderId:number){

  }
}
