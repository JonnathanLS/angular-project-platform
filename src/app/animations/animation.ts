import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes,
} from '@angular/animations';

export const notifierInsertRemoveTrigger = trigger('notifierInsertRemoveTrigger', [
   transition(':enter', [
      style({ opacity: 0 }),
      animate('1s ease',  keyframes([
         style({ opacity: 0, offset: 0 }),
         style({ opacity: 1,  offset: 1 })
      ])),
   ]),
   transition(':leave', [
      animate('1s ease',  keyframes([
         style({ opacity: 1, offset: 0 }),
         style({ opacity: 0,  offset: 1 })
      ]))
   ])
])