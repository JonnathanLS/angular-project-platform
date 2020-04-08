import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NotifierService } from './notifier.service';

@Injectable({
    providedIn: 'root',
})
export class NotifierInterceptor implements HttpInterceptor{
    constructor(
        private notifierService: NotifierService
    ){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {
                this.notifierService.error(
                    `Não foi possível concluir a requisição para ${err.url} - status: ${err.status}`, { millisecs: 5000 }
                );
                throw err;
            }),
        );
      }
}