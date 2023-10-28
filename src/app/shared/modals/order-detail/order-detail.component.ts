import { Component, OnInit } from '@angular/core';
import { IOrder } from '../../models/order';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order: IOrder;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {}
}
