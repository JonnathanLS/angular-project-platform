import { Component, OnInit, Input } from '@angular/core';
import { Notifier } from '../notifier';
import { NotifierService } from '../notifier.service';
import { notifierInsertRemoveTrigger } from '../../animations/animation';

@Component({
   selector: 'app-notifier-details',
   templateUrl: './notifier-details.component.html',
   styleUrls: ['./notifier-details.component.css'],
   animations: [ notifierInsertRemoveTrigger ],
})
export class NotifierDetailsComponent implements OnInit {
   @Input() notifiers: Notifier[];
   @Input() position: string;

   constructor(private serviceNotifier: NotifierService) { }

   ngOnInit() {
      console.log(this.position)
      this.position = 'notifier-position np-' + this.position;
   }

   close(notifier: Notifier){
      this.serviceNotifier.remove(notifier, this.notifiers);
   }

}
