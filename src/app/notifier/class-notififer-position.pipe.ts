import { Pipe, PipeTransform } from '@angular/core';
import { Notifier } from './notifier';

@Pipe({
  name: 'classNotififer'
})
export class ClassNotififerPipe implements PipeTransform {

  transform(notifier: Notifier, ...args: any[]): string {
    if (!notifier) return null;
    const type = "notifier-type-" + notifier.type;
   //  const pos = notifier.options.position;
   //  const position = "sticky-top";
    return `notifier ${type}`;
  }

}
