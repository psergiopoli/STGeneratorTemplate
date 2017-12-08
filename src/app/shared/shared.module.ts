import { UtilService } from './util.service';
import { GlobalEventsManager } from './global.eventmanager';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    GlobalEventsManager,
    UtilService
  ]
})
export class SharedModule { }
