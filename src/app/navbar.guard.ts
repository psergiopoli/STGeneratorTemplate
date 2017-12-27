import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GlobalEventsManager } from './global.eventmanager';
import { AuthenticationService } from './auth/auth.service';

@Injectable()
export class NavbarGuard implements CanActivate {

      constructor(
        private router: Router,
        private globalEventsManager: GlobalEventsManager
    ) { }

    canActivate() {
        if (localStorage.getItem('currentUser')) {
            this.globalEventsManager.showNavBar.emit(true);
            return true;
        }

        this.globalEventsManager.hideNavBar.emit(true);
        return true;
    }
}
