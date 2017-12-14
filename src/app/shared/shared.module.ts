import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { UtilService } from './util.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginateComponent } from './paginate/paginate.component';
import { AdsComponent } from './ads/ads.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule 
  ],
  declarations: [
    PaginateComponent,
    AdsComponent,
    NavbarComponent
  ],
  providers: [
    UtilService
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    PaginateComponent,
    AdsComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
