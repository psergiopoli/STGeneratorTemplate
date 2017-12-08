import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'card', loadChildren: 'app/card/card.module#CardModule'},
  { path: 'admin', loadChildren: 'app/auth/auth.module#AuthModule'},
  { path: '**', redirectTo: 'card/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
