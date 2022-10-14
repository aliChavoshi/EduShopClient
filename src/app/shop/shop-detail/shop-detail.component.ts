import { ShopService } from './../shop.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent implements OnInit {
  id: number;

  constructor(private shopService: ShopService, private bc: BreadcrumbService, private route: ActivatedRoute, private title: Title) {
    this.id = Number(this.route.snapshot?.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.shopService.getProduct(this.id).subscribe((res) => {
      this.title.setTitle(res?.title);
      this.bc.set('@ProductDetail', res.title);
      // console.log(res);
    });
  }
}
