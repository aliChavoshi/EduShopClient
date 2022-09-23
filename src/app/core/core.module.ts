import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { FooterComponent } from './layers/footer/footer.component';
import { NavbarComponent } from './layers/navbar/navbar.component';
import { NotFoundComponent } from './layers/not-found/not-found.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlingInterceptor } from './interceptors/error-handling.interceptor';
import { ServerErrorComponent } from './layers/server-error/server-error.component';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, NotFoundComponent, ServerErrorComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, NavbarComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlingInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
