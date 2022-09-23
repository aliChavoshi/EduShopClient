import { ShopService } from './../shop.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent implements OnInit {
  id: number;

  constructor(private shopService: ShopService, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot?.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.shopService.getProduct(this.id).subscribe((res) => {
      console.log(res);
    });
  }
}
