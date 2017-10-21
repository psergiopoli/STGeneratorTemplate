import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardDetailsComponent } from './card.component';

const appRoutes: Routes = [
  { path: 'card', component: CardDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class CardRoutingModule { }
