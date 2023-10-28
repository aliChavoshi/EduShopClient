import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { CardShopComponent } from './components/card-shop/card-shop.component';
import { OrderTotalComponent } from './components/order-total/order-total.component';
//angular material
import { MatSidenavModule } from '@angular/material/sidenav';
//ngx-bootstrap
// pagination
import { PaginationModule } from 'ngx-bootstrap/pagination';
//toast message
import { ToastrModule } from 'ngx-toastr';
import { InputComponent } from './components/input/input.component';
import { MatStepperModule } from '@angular/material/stepper';
import { StepperComponent } from './components/stepper/stepper.component';
import { AddAddressCheckoutComponent } from './modals/add-address-checkout/add-address-checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShamsiPipe } from './pipes/shamsi.pipe';
import { OrderDetailComponent } from './modals/order-detail/order-detail.component';

@NgModule({
  declarations: [CardShopComponent, OrderTotalComponent, InputComponent, StepperComponent, AddAddressCheckoutComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    PaginationModule,
    RouterModule,
    ReactiveFormsModule,
    MatStepperModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing',
      timeOut: 5000
    })
  ],
  exports: [CardShopComponent, MatSidenavModule, PaginationModule, AddAddressCheckoutComponent, ToastrModule, OrderTotalComponent, InputComponent, StepperComponent]
})
export class SharedModule {}
