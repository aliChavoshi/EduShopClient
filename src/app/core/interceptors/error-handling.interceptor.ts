import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(private toast: ToastrService, private router: Router) {}
  //TODO handle Errors
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error) {
          const base = error.error;
          switch (base.statusCode) {
            case 404:
              this.router.navigateByUrl('/notFound');
              this.toast.error(base?.message);
              break;
            case 500:
              this.router.navigateByUrl('/serverError');
              this.toast.error(base?.message);
              break;

            default:
              this.toast.error(base?.message);
              break;
          }
        }
        return throwError(() => {
          console.log(error);
          return error;
        });
      })
    );
  }
}
