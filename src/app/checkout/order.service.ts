import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDeliveryMethod } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private backendUrl = environment.backendUrl;

  constructor(private http: HttpClient) {}

  getDeliveryMethods() {
    return this.http.get<IDeliveryMethod[]>(`${this.backendUrl}/order/getDeliveryMethods`);
  }
}
