import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IUser, Login, Register } from './../shared/models/user';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { IShipToAddress, IAddress } from '../shared/models/address';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = environment.backendUrl;
  private currentUser = new BehaviorSubject<IUser>(null); //next
  public currentUser$ = this.currentUser.asObservable(); //sub

  constructor(private http: HttpClient, private router: Router) {}

  login(login: Login): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseUrl}/account/login`, login).pipe(
      map((response): IUser => {
        if (response) {
          this.setCurrentUser(response);
          return response;
        }
        return null;
      })
    );
  }
  getAddresses() {
    return this.http.get<IAddress[]>(`${this.baseUrl}/account/getAddresses`);
  }
  addAddress(address: IShipToAddress | any) {
    return this.http.post<IAddress>(`${this.baseUrl}/account/createAddress`, address);
  }
  register(register: Register) {
    return this.http.post<IUser>(`${this.baseUrl}/account/register`, register).pipe(
      map((response: IUser) => {
        if (response) {
          this.setCurrentUser(response);
          return response;
        }
        return null;
      })
    );
  }
  logout() {
    localStorage.removeItem(environment.keySaveUser);
    this.currentUser.next(null);
    this.router.navigateByUrl('/');
  }
  setCurrentUser(user: IUser) {
    if (user) {
      localStorage.setItem(environment.keySaveUser, JSON.stringify(user));
      this.currentUser.next(user);
    }
  }
}
