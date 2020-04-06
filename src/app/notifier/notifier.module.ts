import { NgModule } from '@angular/core';
import { NotifierComponent } from './notifier.component';
import { CommonModule } from '@angular/common';
import { ClassNotififerPipe } from './class-notififer-position.pipe';
import { NotifierDetailsComponent } from './notifier-details/notifier-details.component';


@NgModule({
    declarations: [ NotifierComponent, ClassNotififerPipe, NotifierDetailsComponent ],
    exports: [ NotifierComponent ],
    imports: [ CommonModule ]
})
export class NotifierModule{
    
}