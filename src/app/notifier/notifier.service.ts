import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { NotifierType, NotifierPosition, NotifierOptions } from './notifier';
import { Notifier } from './notifier';

const MILLISECONDS: number = 3000;
const POSITION: NotifierPosition = NotifierPosition.BOTTOM;

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
   notiferSubject = new Subject<Notifier>();
   constructor() { }
   init(): Observable<Notifier>{ return this.notiferSubject.asObservable(); }

   private subjectNext(type: NotifierType, msg: string, opt?: NotifierOptions){
      this.notiferSubject.next(this.setNotifier(type, msg, opt)); 
   }
   success(message: string, options?: NotifierOptions){ 
      return this.subjectNext(NotifierType.SUCCESS, message, options) }
   warning(message: string, options?: NotifierOptions){ 
      return this.subjectNext(NotifierType.WARNING, message, options) }
   error(message: string, options?: NotifierOptions){ 
      return this.subjectNext(NotifierType.ERROR, message, options) }
   info(message: string, options?: NotifierOptions){ 
      return this.subjectNext(NotifierType.INFO, message, options) }
   
   private setNotifier(type: NotifierType, message: string, options?: NotifierOptions): Notifier{
      const newOptions: NotifierOptions = { title: null, millisecs: MILLISECONDS, position: POSITION };
      if (options){
         newOptions.title = options.title ? options.title : null;
         newOptions.millisecs = options.millisecs ? options.millisecs : MILLISECONDS;
         newOptions.position = options.position ? options.position : POSITION;
      }
      return { type, message, options: newOptions };
   }
   remove(notifier: Notifier, array: Notifier[]): Notifier[] {
      if (array.length){
         const index = array.indexOf(notifier);
         if (index != -1) return array.splice(index, 1);
      }
      return array;
   }
}
