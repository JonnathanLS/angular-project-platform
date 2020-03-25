import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  type: string = 'bar';
  percent: number = 10;
  objStyle: Object = {
    'width': this.percent + '%'
  }
  constructor() { }

  ngOnInit() {
    // this.percentProgress = 'width: ' + this.percent + '%';
  }

}
