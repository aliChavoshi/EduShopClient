import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IAddress, ICheckoutFormBuilder } from '../shared/models/user';
import { IDeliveryMethod } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class CheckoutFormBuilderService {
  private formBuilder = new BehaviorSubject<ICheckoutFormBuilder>(null);
  public $formBuilder = this.formBuilder.asObservable();

  constructor() {}

  setAddress(address: IAddress) {
    this.formBuilder.next({ ...this.formBuilder.value, address });
  }
  setDeliveryMethod(deliveryMethod: IDeliveryMethod) {
    this.formBuilder.next({ ...this.formBuilder.value, deliveryMethod });
  }

  setPortalType(portalType: number) {
    this.formBuilder.next({ ...this.formBuilder.value, portalType });
  }
}
