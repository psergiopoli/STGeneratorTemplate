import { AuthGuard } from './auth/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarGuard } from './navbar.guard';

const routes: Routes = [

  { path: 'admin', loadChildren: 'app/auth/auth.module#AuthModule', canActivate: [NavbarGuard] },
  { path: 'card', loadChildren: 'app/card/card.module#CardModule', canActivate: [NavbarGuard] },
  { path: '**', redirectTo: 'card/list', canActivate: [NavbarGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
