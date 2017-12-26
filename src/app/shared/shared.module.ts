import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginateComponent } from './paginate/paginate.component';
import { AdsComponent } from './ads/ads.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FacebookModule } from 'ngx-facebook';
import { FacebookService } from 'ngx-facebook/dist/esm/providers/facebook';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormGroupSelectComponent } from './form-group-select/form-group-select.component';
import { FormGroupInputComponent } from './form-group-input/form-group-input.component';

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
    NavbarComponent,
    FileUploadComponent,
    FormGroupSelectComponent,
    FormGroupInputComponent
  ],
  providers: [
    FacebookService
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    PaginateComponent,
    AdsComponent,
    NavbarComponent,
    FacebookModule,
    FileUploadComponent,
    FormGroupInputComponent,
    FormGroupSelectComponent
  ]
})
export class SharedModule { }
