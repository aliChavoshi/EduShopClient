import { environment } from 'src/environments/environment';
import { BasketService } from './basket/basket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EduStoreClient';
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.getBasket();
  }

  private getBasket() {
    const basketId = localStorage.getItem(environment.keyLocalStorageBasket);
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
