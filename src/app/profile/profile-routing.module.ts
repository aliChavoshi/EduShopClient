import { Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OrdersComponent } from './orders/orders.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent, // base
    //router-outlet
    children: [
      {
        path: '',
        redirectTo: 'orders',
        pathMatch: 'full'
      },
      {
        path: 'changePassword',
        component: ChangePasswordComponent,
        pathMatch: 'full',
        title: 'تغییر کلمه عبور',
        data: {
          title: 'تغییر کلمه عبور',
          breadcrumb: 'تغییر کلمه عبور'
        }
      },
      {
        path: 'orders',
        component: OrdersComponent,
        // resolve: { data: ApiResolver },
        pathMatch: 'full',
        title: 'سفارش‌های من',
        data: {
          title: 'سفارش‌های من',
          breadcrumb: 'سفارش‌های من'
          // apiUrl: 'order/getOrdersForUser'
        }
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
        pathMatch: 'full',
        title: 'پیام ها',
        // resolve: { data: ApiResolver },
        data: {
          title: 'پیام ها',
          breadcrumb: 'پیام های دریافتی',
          // apiUrl: 'notification/getAllNotificationForClient'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
