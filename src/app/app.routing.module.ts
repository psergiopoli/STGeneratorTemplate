import { AuthGuard } from './auth/auth.guard';
import { ApproveCardComponent } from './approve-card/approve-card.component';
import { LoginComponent } from './auth/login.component';
import { CardFormComponent } from './card-form/card-form.component';
import { ShowCardComponent } from './show-card/show-card.component';
import { ListCardComponent } from './list-card/list-card.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: ListCardComponent },
  { path: 'card/:id', component: ShowCardComponent },
  { path: 'create', component: CardFormComponent },
  { path: 'admin/login',  component: LoginComponent},    
  { path: 'admin/approve/:id', component: ApproveCardComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
