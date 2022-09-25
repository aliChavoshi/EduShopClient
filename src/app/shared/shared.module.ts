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
//toast message
import { ToastrModule } from 'ngx-toastr';
import { BreadcrumbModule } from 'xng-breadcrumb';
//breadcrumb

@NgModule({
  declarations: [CardShopComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    PaginationModule,
    RouterModule,
    BreadcrumbModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing',
      timeOut: 5000
    })
  ],
  exports: [CardShopComponent, MatSidenavModule, PaginationModule, ToastrModule,BreadcrumbModule]
})
export class SharedModule {}
