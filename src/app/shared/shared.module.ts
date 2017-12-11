import { HttpModule } from '@angular/http';
import { UtilService } from './util.service';
import { GlobalEventsManager } from './global.eventmanager';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginateComponent } from './paginate/paginate.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    PaginateComponent
  ],
  providers: [
    GlobalEventsManager,
    UtilService
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    PaginateComponent
  ]
})
export class SharedModule { }
