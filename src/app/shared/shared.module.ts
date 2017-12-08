import { HttpModule } from '@angular/http';
import { UtilService } from './util.service';
import { GlobalEventsManager } from './global.eventmanager';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    GlobalEventsManager,
    UtilService
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ]
})
export class SharedModule { }
