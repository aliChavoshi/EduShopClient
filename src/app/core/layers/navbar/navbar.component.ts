import { AccountService } from './../../../account/account.service';
import { BasketService } from './../../../basket/basket.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket } from 'src/app/shared/models/basket';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  basket$: Observable<IBasket>;
  currentUser$: Observable<IUser>;

  constructor(private basketService: BasketService, private accountService: AccountService) {}

  ngOnInit(): void {
    this.basket$ = this.basketService.basketItems$;
    this.currentUser$ = this.accountService.currentUser$;
  }
  logout() {
    this.accountService.logout();
  }
}
