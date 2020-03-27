import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  public loader$: Observable<string>

  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.loader$ = this.loaderService.init().pipe(
      map(loaderType => 'loader-' + loaderType.valueOf())
    );
  }
}
