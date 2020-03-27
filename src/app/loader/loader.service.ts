import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { LoaderType } from './loader-type';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaderSubject = new Subject<LoaderType>();

  constructor(private http: HttpClient){}

  init(): Observable<LoaderType> {
    return this.loaderSubject.asObservable().pipe(startWith(LoaderType.STOPPED));
  }
  start(){
    this.loaderSubject.next(LoaderType.LOADING)
  }
  end(){
    this.loaderSubject.next(LoaderType.ENDING)
  }
  stop() {
    this.loaderSubject.next(LoaderType.STOPPED);
  }
  fakeJson(): Observable<Object>{
    // const payload = {
    //   "token": "RosBdjobtqDbPBUE3rigVg",
    //   "data": {
    //     "name": "nameFirst",
    //     "email": "internetEmail",
    //     "phone": "phoneHome",
    //     "_repeat": 7
    //   }
    // };
    // return this.http.post('https://app.fakejson.com/q', payload);
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
  }
}
