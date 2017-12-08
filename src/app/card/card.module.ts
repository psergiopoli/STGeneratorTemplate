import { SharedModule } from './../shared/shared.module';
import { ListCardComponent } from './list-card/list-card.component';
import { ShowCardComponent } from './show-card/show-card.component';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardService } from './card.service';
import { CardFormComponent } from './card-form/card-form.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    CardRoutingModule,
    SharedModule
  ],
  declarations: [
    CardFormComponent,
    ShowCardComponent,
    ListCardComponent
  ],
  providers: [
    CardService
  ]
})
export class CardModule { }
