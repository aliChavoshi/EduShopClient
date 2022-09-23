import { ServerErrorComponent } from './core/layers/server-error/server-error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/layers/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    title: 'صفحه اصلی',
    loadChildren: () => import('./home/home.module').then((x) => x.HomeModule)
  },
  {
    path: 'shop',
    title: 'فروشگاه',
    loadChildren: () => import('./shop/shop.module').then((x) => x.ShopModule)
  },
  {
    path: 'notFound',
    component: NotFoundComponent
  },
  {
    path: 'serverError',
    component: ServerErrorComponent
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
