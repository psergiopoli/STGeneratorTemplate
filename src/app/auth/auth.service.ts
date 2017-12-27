import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { environment } from '@env/environment';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(
        private http: HttpClient,
        private router: Router,) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<any> {
        let authParams = new HttpParams();
        authParams = authParams.append('username', username);
        authParams = authParams.append('password', password);
        return this.http.post(environment.apibaseurl + '/login', authParams);
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }

    signup(username: string, password: string ): Observable<any> {
        const body = JSON.stringify({ 'email': username, 'password': password });
        return this.http.post(environment.apibaseurl + '/sign-in', body);
    }
}
