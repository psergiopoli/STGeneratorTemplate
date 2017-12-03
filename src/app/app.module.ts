import { LoginComponent } from './auth/login.component';
import { AuthenticationService } from './auth/auth.service';
import { CardService } from './show-card/card.service';
import { GlobalEventsManager } from './global.eventmanager';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from "@angular/http";
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { routing } from './app.routing';
import { ShowCardComponent } from './show-card/show-card.component';
import { ApproveCardComponent } from './approve-card/approve-card.component';
import { AuthGuard } from './auth/auth.guard';
import { GlobalMessageService } from './global-message/global-message.service';
import { GlobalMessageComponent } from './global-message/global-message.component';
import { ListCardComponent } from './list-card/list-card.component';

const appRoutes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    ShowCardComponent,
    ApproveCardComponent,
    GlobalMessageComponent,
    LoginComponent,
    ListCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    routing
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    GlobalMessageService,
    GlobalEventsManager,
    CardService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
