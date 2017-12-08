import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { GlobalMessageModule } from './global-message/global-message.module';
import { LoginComponent } from './auth/login.component';
import { AuthenticationService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { AuthGuard } from './auth/auth.guard';
import { GlobalMessageService } from './global-message/global-message.service';
import { GlobalMessageComponent } from './global-message/global-message.component';

const appRoutes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    GlobalMessageModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    GlobalMessageModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
