import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent
  },
  {
    path: 'success',
    component: CheckoutSuccessComponent,
    title: 'نتیجه پرداخت',
    data: { breadcrumb: { skip: true } }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {}
