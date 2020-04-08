import { NgModule } from '@angular/core';
import { NotifierComponent } from './notifier.component';
import { CommonModule } from '@angular/common';
import { NotifierPipe } from './notifer.pipe';
import { NotifierDetailsComponent } from './notifier-details/notifier-details.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotifierInterceptor } from './notifier.interceptor';


@NgModule({
    declarations: [ NotifierComponent, NotifierPipe, NotifierDetailsComponent ],
    exports: [ NotifierComponent ],
    imports: [ CommonModule ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: NotifierInterceptor,
        multi: true,
    }]
})
export class NotifierModule{
    
}