import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

import { catchError, EMPTY, Observable, throwError } from 'rxjs';
import { ToastService } from 'ng-devui';
import { AuthService } from '../@core/services/auth.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastService: ToastService, private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    const authToken = this.auth.getAuthorizationToken();
    let authReq = req;
    if (authToken) {
      authReq = req.clone({
        headers: req.headers.set('x-token', authToken as string),
      });
    }
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        this.toastService.open({
          value: [{ severity: 'error', content: error.message, life: 5000 }],
        });
        return throwError(() => new Error(`Backend returned code ${error.status}, body was: ${error.message}`));
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    // if (error.status === 0) {
    //   // A client-side or network error occurred. Handle it accordingly.
    //   console.error('An error occurred:', error.error);
    // } else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues as to what went wrong.
    //   console.error(`Backend returned code ${error.status}, body was: `, error.error);
    // }
    this.toastService.open({
      value: [{ severity: 'error', content: error.message, life: 5000 }],
    });
    // Return an observable with a user-facing error message.
    // return throwError(() => new Error(`Backend returned code ${error.status}, body was: ${error.message}`));
    return EMPTY;
  }
}
