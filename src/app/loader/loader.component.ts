import { Component, OnInit, OnChanges } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { LoaderService } from './loader.service';
import { LoaderType } from './loader-type';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  public loader$: Observable<string>


  // type: string = 'bar';
  // percent: number;
  // isDone: boolean = false;
  // objClass = {
  //   'fade-out': false
  // }
  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loader$ = this.loaderService.init().pipe(map(loaderType => 'loader-' + loaderType.valueOf()));

    // const rxjsInterval = interval(30);
    // const loading = rxjsInterval.pipe(take(101));
    // loading.subscribe(num => {
    //   this.percent = num;
    //   if(num >= 100) {
    //     this.objClass['fade-out'] = true;
    //     setTimeout(()=> this.isDone = true, 1999);
    //   }
    // });
  }

  request(){
    this.loaderService.fakeJson().subscribe(data => console.log(data));
    //this.loaderService.mockHttpRequest().subscribe(response => console.log(response));
    //this.loaderService.mockHttpRequest().subscribe(text => console.log(text));
  }
}
