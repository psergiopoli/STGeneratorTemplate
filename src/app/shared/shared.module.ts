import { HttpModule } from '@angular/http';
import { UtilService } from './util.service';
import { GlobalEventsManager } from './global.eventmanager';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginateComponent } from './paginate/paginate.component';
import { AdsComponent } from './ads/ads.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    PaginateComponent,
    AdsComponent
  ],
  providers: [
    GlobalEventsManager,
    UtilService
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    PaginateComponent,
    AdsComponent
  ]
})
export class SharedModule { }
