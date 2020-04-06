import { Component, OnInit } from '@angular/core';
import { NotifierService } from './notifier.service';
import { Notifier, NotifierPosition } from './notifier';
import { HttpClient } from '@angular/common/http';
import { notifierInsertRemoveTrigger } from '../animations/animation';

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
      { position: NotifierPosition.LEFT_TOP, notifiers: Array<Notifier>() },
      { position: NotifierPosition.RIGHT_TOP, notifiers: Array<Notifier>() },
      { position: NotifierPosition.LEFT_BOTTOM, notifiers: Array<Notifier>() },
      { position: NotifierPosition.RIGHT_BOTTOM, notifiers: Array<Notifier>() },
   ]
   constructor(private notifierService: NotifierService, private http: HttpClient) { }
   ngOnInit() {
      this.notifierService.init().subscribe(notifier =>{
         let notifiers = this.notifiers
            .filter(obj => obj.position === notifier.options.position)[0].notifiers;
         notifiers = notifiers ? notifiers : [];
         notifiers.push(notifier);
         // setTimeout(()=> this.notifierService
         //    .remove(notifier, notifiers), notifier.options.millisecs);
      });
   }

   teste(){
      this.notifierService.success('teste de suceso');
      this.notifierService.error('teste de dasdasdsadasdadasdsadsadasdaserror', { title: 'Titulo Error', fullWidth: true});
      this.notifierService.success('teste dadsdasdsae error', { title: 'Titulo Error', position: NotifierPosition.LEFT_BOTTOM});
      this.notifierService.error('teste de error', { title: 'Titulo Error', position: NotifierPosition.RIGHT_BOTTOM});
      this.notifierService.success('teste dasdasdde error', { title: 'Titulo Error', position: NotifierPosition.RIGHT_BOTTOM, fullWidth: true});
      this.notifierService.error('testedasdasdasdasdasd de error', { title: 'Titulo Error', position: NotifierPosition.LEFT_TOP});
   }
}
