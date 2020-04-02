import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotifierService } from './notifier.service';
import { map } from 'rxjs/operators';
import { Notifier } from './notifier';
import { NotifierType } from './notifier-type';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent implements OnInit {
  // notifier$: Observable<string>;
  notifiers: Notifier[] = [];
  time = 1000;

  constructor(private notifierService: NotifierService) { }

  ngOnInit() {
    this.notifierService.init().subscribe();
  }

  teste(){
    console.log('teste component')
    let nt: Notifier = {
      type: NotifierType.SUCCESS,
      message: 'teste'
    }
    this.notifiers.push(nt);
    console.log(this.notifiers);
    setTimeout(()=> this.remove(nt), this.time);
    // this.notifierService.teste('teste');
  }

  private remove(nt: any) {
    var idx = this.notifiers.indexOf(nt);
    if (idx != -1) {
      return this.notifiers.splice(idx, 1); 
    }
    return this.notifiers;
  }

}
