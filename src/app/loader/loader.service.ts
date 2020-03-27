import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoaderType } from './loader-type';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  // 'LoaderType' serves as the basis for the css class that will perform the progress view.
  loaderSubject = new Subject<LoaderType>();
  // Initializes the loader by turning it into an observable and emitting an event to start as stopped.
  init(): Observable<LoaderType> { return this.loaderSubject.asObservable().pipe(startWith(LoaderType.STOPPED)); }
  // Begins and executes the request progress
  start(){ this.loaderSubject.next(LoaderType.LOADING) }
  // Prepares progress to be finalized
  end(){ this.loaderSubject.next(LoaderType.ENDING) }
  // Stop progress disappearing from view
  stop() { this.loaderSubject.next(LoaderType.STOPPED); }
}
