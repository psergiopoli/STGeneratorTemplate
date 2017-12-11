import { CardFormComponent } from './card-form/card-form.component';
import { ShowCardComponent } from './show-card/show-card.component';
import { ListCardComponent } from './list-card/list-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'list', component: ListCardComponent },
  { path: 'create', component: CardFormComponent},
  { path: ':id', component: ShowCardComponent },
  { path: 'sec/:uuid', component: ShowCardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }
