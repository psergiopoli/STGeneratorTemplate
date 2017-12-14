import { UserService } from './user/user.service';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './../shared/shared.module';
import { AuthenticationService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ManageComponent } from './manage/manage.component';
import { LoginGuard } from './login/login.guard';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    ManageComponent
  ],
  providers: [
    AuthGuard,
    LoginGuard,
    AuthenticationService,
    UserService
  ]
})
export class AuthModule { }
