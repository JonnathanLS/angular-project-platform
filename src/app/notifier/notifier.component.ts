import { Component, OnInit } from '@angular/core';
import { NotifierService } from './notifier.service';
import { Notifier, NotifierPosition } from './notifier';
import { HttpClient } from '@angular/common/http';

interface Notifiers {
   position: NotifierPosition;
   notifiers: Notifier[];
}
@Component({
   selector: 'app-notifier',
   templateUrl: './notifier.component.html',
   styleUrls: ['./notifier.component.css'],
})
export class NotifierComponent implements OnInit {
   notifiers: Notifiers[] = [
      { position: NotifierPosition.TOP, notifiers: Array<Notifier>() },
      { position: NotifierPosition.BOTTOM, notifiers: Array<Notifier>() },
   ]
   constructor(
      private notifierService: NotifierService,
      private http: HttpClient
   ) { this.http.get('https://jsonplaceholder.typicode.com/postss').subscribe()}
   ngOnInit() {
      this.notifierService.init().subscribe(notifier =>{
         let arrayNotifiers = this.notifiers
            .filter(obj => obj.position === notifier.options.position)[0].notifiers;
         arrayNotifiers = arrayNotifiers ? arrayNotifiers : [];
         arrayNotifiers.push(notifier);
         setTimeout( () => this.notifierService.remove(notifier, arrayNotifiers), notifier.options.millisecs);
      });
   }
   // success(){ this.notifierService.success('Teste de Sucesso')};
   // warning(){ this.notifierService.warning('Teste de warning', {title: 'warning', position: NotifierPosition.BOTTOM})};
   // error(){ this.notifierService.error('Teste de error', {title: 'error', millisecs: 5000})};
   // info(){ this.notifierService.info('Teste de info', {title: 'info', position: NotifierPosition.BOTTOM, millisecs: 10000})};
}
