import { ServerErrorComponent } from './core/layers/server-error/server-error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/layers/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    title: 'صفحه اصلی',
    loadChildren: () => import('./home/home.module').then((x) => x.HomeModule),
    data: { breadcrumb: { label: 'خانه' } }
  },
  {
    path: 'basket',
    title: 'سبد خرید',
    loadChildren: () => import('./basket/basket.module').then((x) => x.BasketModule),
    data: { breadcrumb: 'سبد خرید' }
  },
  {
    path: 'shop',
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
