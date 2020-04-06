import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { NotifierType, NotifierPosition, NotifierOptions } from './notifier';
import { Notifier } from './notifier';

const MILLISECONDS: number = 2000;
const POSITION: NotifierPosition = NotifierPosition.RIGHT_TOP;

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
   error(message: string, options?: NotifierOptions){
      this.notiferSubject.next(this.setNotifier(message, NotifierType.ERROR, options));
   }
   private setNotifier(message: string, type: NotifierType, options?: NotifierOptions): Notifier{
      //  const newTitle = `${type} Notification !`;
      const newOptions = options ? options : { title: null, millisecs: MILLISECONDS, position: POSITION }
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
