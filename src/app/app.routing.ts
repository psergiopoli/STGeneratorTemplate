import { ListCardComponent } from './list-card/list-card.component';
import { LoginComponent } from './auth/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ShowCardComponent } from './show-card/show-card.component';
import { ApproveCardComponent } from './approve-card/approve-card.component';
import { AuthGuard } from './auth/auth.guard';
 
const appRoutes: Routes = [
    { path: '', component: ListCardComponent },
    { path: 'card/:id', component: ShowCardComponent },
    { path: 'admin/login',  component: LoginComponent},    
    { path: 'admin/approve/:id', component: ApproveCardComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);