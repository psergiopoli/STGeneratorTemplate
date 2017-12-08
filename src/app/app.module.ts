import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { GlobalMessageModule } from './global-message/global-message.module';
import { LoginComponent } from './auth/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';

import { AuthGuard } from './auth/auth.guard';
import { GlobalMessageComponent } from './global-message/global-message.component';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GlobalMessageModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    GlobalMessageModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
