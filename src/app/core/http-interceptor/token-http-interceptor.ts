import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class TokenHttpInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = (<HTMLInputElement>document.getElementsByName('__RequestVerificationToken').item(0)).value;

    const reqWithToken = request.clone({
      headers: request.headers.append('__RequestVerificationToken', token)
    });

    return next.handle(reqWithToken);
  }
}
