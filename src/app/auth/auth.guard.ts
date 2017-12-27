import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
    ) { }

    canActivate() {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        return false;
    }
}
