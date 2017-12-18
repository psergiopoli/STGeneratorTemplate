import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { UtilService } from './util.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginateComponent } from './paginate/paginate.component';
import { AdsComponent } from './ads/ads.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FacebookModule } from 'ngx-facebook';
import { FacebookService } from 'ngx-facebook/dist/esm/providers/facebook';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    FacebookModule
  ],
  declarations: [
    PaginateComponent,
    AdsComponent,
    NavbarComponent
  ],
  providers: [
    UtilService,
    FacebookService
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    PaginateComponent,
    AdsComponent,
    NavbarComponent,
    FacebookModule
  ]
})
export class SharedModule { }
