import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpEventType } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { BusyService } from '../services/busy.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private busyService: BusyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.busyService.show();
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.Sent) {
          //send request
        }
        if (event.type === HttpEventType.Response) {
          //get response
          this.busyService.hide();
        }
      }),
      catchError((error) => {
        this.busyService.hide();
        return throwError(() => {
          return error;
        });
      })
    );
  }
}
