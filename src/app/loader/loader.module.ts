import { NgModule } from "@angular/core";
import { LoaderComponent } from "./loader.component";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader.interceptor';

@NgModule({
    declarations: [LoaderComponent],
    exports: [LoaderComponent],
    imports: [CommonModule],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: LoaderInterceptor,
        multi: true        
    }]
})
export class LoaderModule { }