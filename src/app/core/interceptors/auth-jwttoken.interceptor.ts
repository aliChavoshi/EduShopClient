import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';

@Injectable()
export class AuthJWTTokenInterceptor implements HttpInterceptor {
  constructor(private accountService: AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.accountService.currentUser$.pipe(take(1)).subscribe((user) => {
      if (user) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${user.token}`
          }
        });
      }
    });
    return next.handle(request);
  }
}
