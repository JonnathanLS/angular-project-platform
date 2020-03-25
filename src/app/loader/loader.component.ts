import { Component, OnInit, OnChanges } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  type: string = 'bar';
  percent: number;
  isDone: boolean = false;
  objClass = {
    'fade-out': false
  }
  constructor() { }

  ngOnInit() {
    const rxjsInterval = interval(30);
    const loading = rxjsInterval.pipe(take(101));
    loading.subscribe(num => {
      this.percent = num;
      if(num >= 100) {
        this.objClass['fade-out'] = true;
        setTimeout(()=> this.isDone = true, 1999);
      }
    });
  }
}
