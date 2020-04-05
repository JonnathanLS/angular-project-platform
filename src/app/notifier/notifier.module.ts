import { NgModule } from '@angular/core';
import { NotifierComponent } from './notifier.component';
import { CommonModule } from '@angular/common';
import { ClassNotififerPipe } from './class-notififer-position.pipe';


@NgModule({
    declarations: [ NotifierComponent, ClassNotififerPipe ],
    exports: [ NotifierComponent ],
    imports: [ CommonModule ]
})
export class NotifierModule{
    
}