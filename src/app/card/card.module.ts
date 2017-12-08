import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardService } from './card.service';

@NgModule({
  imports: [
    CommonModule,
    CardRoutingModule
  ],
  declarations: [],
  providers:[
    CardService
  ]
})
export class CardModule { }
