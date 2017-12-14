import { ManageComponent } from './manage/manage.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate:[LoginGuard] },
  { path: 'manage', component: ManageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
