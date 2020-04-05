import { Component, OnInit } from '@angular/core';
import { NotifierService } from './notifier.service';
import { Notifier } from './notifier';
import { HttpClient } from '@angular/common/http';
import { notifierInsertRemoveTrigger } from '../animations/animation';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css'],
  animations: [ notifierInsertRemoveTrigger ],
})
export class NotifierComponent implements OnInit {
  notifiers: Notifier[] = [];
  constructor(private notifierService: NotifierService, private http: HttpClient) { }
  ngOnInit() {
    this.notifierService.init().subscribe(notifier =>{
      this.notifiers.push(notifier);
      // setTimeout(()=> this.remove(notifier), notifier.options.millisecs);
    });
  }
  isOpen = true;
  teste(){
    this.notifierService.success('teste de sucesso');
    this.isOpen = !this.isOpen;
  }

  private remove(notififer: Notifier) {
    const index = this.notifiers.indexOf(notififer);
    if (index != -1) return this.notifiers.splice(index, 1); 
    return this.notifiers;
  }

}
