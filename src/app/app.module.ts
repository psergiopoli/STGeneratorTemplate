import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { GlobalMessageModule } from './global-message/global-message.module';
import { LoginComponent } from './auth/login.component';
import { AuthenticationService } from './auth/auth.service';
import { CardService } from './card/card.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { ShowCardComponent } from './show-card/show-card.component';
import { ApproveCardComponent } from './approve-card/approve-card.component';
import { AuthGuard } from './auth/auth.guard';
import { GlobalMessageService } from './global-message/global-message.service';
import { GlobalMessageComponent } from './global-message/global-message.component';
import { ListCardComponent } from './list-card/list-card.component';
import { CardFormComponent } from './card-form/card-form.component';

const appRoutes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    ShowCardComponent,
    ApproveCardComponent,
    LoginComponent,
    ListCardComponent,
    CardFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    GlobalMessageModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    CardService,
    AuthenticationService,
    GlobalMessageModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
