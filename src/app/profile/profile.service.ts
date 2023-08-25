import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private backendUrl = environment.backendUrl;

  constructor(private http:HttpClient) { }

  public getOrdersForClient(){
    return this.http.get<any>(`${this.backendUrl}/order/getOrdersForUser`);
  }
}
