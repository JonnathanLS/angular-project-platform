import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { NotifierType } from './notifier-type';
import { Notifier } from './notifier';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  notiferSubject = new Subject<Notifier>();
  

  constructor() { }

  init(): Observable<Notifier>{ return this.notiferSubject.asObservable(); }
  // success(msg: string){ this.notiferSubject.next(msg)}
  teste(txt: string){ 
    console.log('teste service')
    // let nt: Notifier = {
    //   type: NotifierType.SUCCESS,
    //   message: txt.toString()
    // }
    // this.notifiers.push(nt);
    // console.log(this.notifiers);
  } 
}
