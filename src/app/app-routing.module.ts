import { ServerErrorComponent } from './core/layers/server-error/server-error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/layers/not-found/not-found.component';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    title: 'صفحه اصلی',
    loadChildren: () => import('./home/home.module').then((x) => x.HomeModule),
    data: { breadcrumb: { label: 'خانه' } }
  },
  {
    path: 'profile',
    canLoad: [AuthGuard],
    title: 'پروفایل کاربری',
    loadChildren: () => import('./profile/profile.module').then((x) => x.ProfileModule),
    data: { breadcrumb: { skip: true } }
  },
  {
    path: 'account',
    title: 'ورود به سایت',
    loadChildren: () => import('./account/account.module').then((x) => x.AccountModule),
    data: { breadcrumb: { skip: true } }
  },
  {
    path: 'checkout',
    // canActivate: [AuthGuard],
    title: 'پرداخت',
    loadChildren: () => import('./checkout/checkout.module').then((x) => x.CheckoutModule),
    data: { breadcrumb: 'پرداخت' }
    // data: { breadcrumb: { skip: true } }
  },
  {
    path: 'basket',
    title: 'سبد خرید',
    loadChildren: () => import('./basket/basket.module').then((x) => x.BasketModule),
    data: { breadcrumb: 'سبد خرید' }
  },
  {
    path: 'shop',
    // canActivate: [AuthGuard],
    title: 'فروشگاه',
    loadChildren: () => import('./shop/shop.module').then((x) => x.ShopModule),
    data: { breadcrumb: 'محصولات' }
  },
  {
    path: 'notFound',
    component: NotFoundComponent,
    data: { breadcrumb: 'خطای 404' }
  },
  {
    path: 'serverError',
    component: ServerErrorComponent,
    data: { breadcrumb: 'خطا در سمت سرور' }
  },
  {
    path: '**',
    title: 'صفحه یافت نشد',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
