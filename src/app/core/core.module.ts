import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { FooterComponent } from './layers/footer/footer.component';
import { NavbarComponent } from './layers/navbar/navbar.component';
import { NotFoundComponent } from './layers/not-found/not-found.component';
import { ServerErrorComponent } from './layers/server-error/server-error.component';
import { BreadcrumbComponent } from './layers/breadcrumb/breadcrumb.component';
//interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlingInterceptor } from './interceptors/error-handling.interceptor';
//third party
import { BreadcrumbModule } from 'xng-breadcrumb';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthJWTTokenInterceptor } from './interceptors/auth-jwttoken.interceptor';
@NgModule({
  declarations: [FooterComponent, NavbarComponent, NotFoundComponent, ServerErrorComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    NgxSpinnerModule.forRoot({
      type: 'square-jelly-box'
    })
  ],
  exports: [FooterComponent, NavbarComponent, BreadcrumbComponent, NgxSpinnerModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthJWTTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
