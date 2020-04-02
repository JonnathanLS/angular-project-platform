import { NgModule } from '@angular/core';
import { NotifierComponent } from './notifier.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [ NotifierComponent ],
    exports: [ NotifierComponent ],
    imports: [ CommonModule ]
})
export class NotifierModule{
    
}