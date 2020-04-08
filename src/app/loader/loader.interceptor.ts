import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpErrorResponse } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpSentEvent } from "@angular/common/http";
import { HttpHeaderResponse } from "@angular/common/http";
import { HttpProgressEvent } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { HttpUserEvent } from "@angular/common/http"

import { LoaderService } from './loader.service';
import { tap, catchError, finalize } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoaderInterceptor implements HttpInterceptor{

	constructor(private loadingService: LoaderService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): 
		Observable<HttpSentEvent | 
		HttpHeaderResponse | 
		HttpProgressEvent | 
		HttpResponse<any> | 
      HttpUserEvent<any>> 
   {     
      return next
         .handle(req)
         .pipe(
            tap(()=> this.loadingService.start()), 
            catchError((err: HttpErrorResponse) => { throw err }),
            finalize(()=>  {
               this.loadingService.end();
               setTimeout(() => this.loadingService.stop(), 1000);
            })
         )
	}
}