import { AuthenticationService } from './../auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) { }

    canActivate() {
        return this.authService.checkUserCanLogin();
    }
}
