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

//breadcrumb

@NgModule({
  declarations: [CardShopComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    PaginationModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing',
      timeOut: 5000
    })
  ],
  exports: [CardShopComponent, MatSidenavModule, PaginationModule, ToastrModule]
})
export class SharedModule {}
