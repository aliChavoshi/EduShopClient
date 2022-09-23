import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { CardShopComponent } from './components/card-shop/card-shop.component';
//angular material
import { MatSidenavModule } from '@angular/material/sidenav';
//ngx-bootstrap
// pagination
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [CardShopComponent],
  imports: [CommonModule, MatSidenavModule, PaginationModule, RouterModule],
  exports: [CardShopComponent, MatSidenavModule, PaginationModule]
})
export class SharedModule {}
