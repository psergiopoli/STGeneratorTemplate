import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardDetailsComponent } from './card.component';
import { CardRoutingModule } from './card-routing.module';

@NgModule({
  imports: [
    CardRoutingModule
  ],
  declarations: [
    CardDetailsComponent
  ],
})
export class CardModule {}
