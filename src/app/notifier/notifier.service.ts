import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { NotifierType, NotififerPosition, NotifierOptions } from './notifier';
import { Notifier } from './notifier';

const MILLISECONDS: number = 10000;
const POSITION: NotififerPosition = NotififerPosition.TOP;
@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  notiferSubject = new Subject<Notifier>();
  
  constructor() { }

  init(): Observable<Notifier>{ return this.notiferSubject.asObservable(); }
 
  success(message: string, options?: NotifierOptions){
    this.notiferSubject.next(this.setNotifier(message, NotifierType.SUCCESS, options));
  }
  private setNotifier(message: string, type: NotifierType, options?: NotifierOptions): Notifier{
    const newTitle = `${type} Notification !`;
    const newOptions = options ? options : { title: newTitle, millisecs: MILLISECONDS, position: POSITION }
    if (options){
      const title = options.title ? options.title : newTitle;
      const millisecs = options.millisecs ? options.millisecs : MILLISECONDS; 
      const position = options.position ? options.position : POSITION;
    }
    options = options? options : newOptions;
    return { type, message, options };
  }
}
