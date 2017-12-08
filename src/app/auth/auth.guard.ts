import { GlobalEventsManager } from './../shared/global.eventmanager';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private globalEventsManager: GlobalEventsManager
    ) { }

    canActivate() {
        if (localStorage.getItem('currentUser')) {
            this.globalEventsManager.showNavBar.emit(true);
            return true;
        }

        this.router.navigate(['/admin/login']);
        this.globalEventsManager.hideNavBar.emit(true);
        return false;
    }
}
