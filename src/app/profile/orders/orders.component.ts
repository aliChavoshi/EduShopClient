import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { IOrder } from 'src/app/shared/models/order';
import { Subscription } from 'rxjs';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { OrderDetailComponent } from 'src/app/shared/modals/order-detail/order-detail.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {
  private sub = new Subscription();
  orders: IOrder[] = [];
  //modal
  bsModalRef: BsModalRef<any>;

  constructor(private profileService: ProfileService, private modalService: BsModalService) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.getOrdersForCurrentUser();
  }

  getOrdersForCurrentUser() {
    const sub$ = this.profileService.getOrdersForClient().subscribe((res) => {
      this.orders = res;
    });
    this.sub.add(sub$);
  }

  showOrder(orderId: number) {
    const childOrder = this.orders.find((x) => x.id == orderId);
    //open modal
    const initial: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        order: childOrder
      }
    };
    this.bsModalRef = this.modalService.show(OrderDetailComponent, initial);
  }
}
