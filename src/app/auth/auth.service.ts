import { Router } from '@angular/router';
import { UtilService } from './../shared/util.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestMethod, Request, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';


@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(
        private http: Http,
        private util: UtilService,
        private router: Router,) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        const authParams = new URLSearchParams();
        authParams.append('username', username);
        authParams.append('password', password);
        return this.http.post(this.util.apibaseurl + '/login', authParams)
            .map((response: Response) => {
                const token = response.json() && response.json().token;
                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    return true;
                } else {
                    return false;
                }
            }).catch(e => {
                if (e.status === 401) {
                    return Observable.throw('Login or password incorrect');
                }else {
                    return Observable.throw('Internal Error');
                }
            });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }

    signup(username: string, password: string ): Observable<boolean> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const body = JSON.stringify({ 'email': username, 'password': password });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.util.apibaseurl + '/sign-in', body, options)
            .map((response: Response) => {
                if (response.status === 201) {
                    return true;
                }else {
                    return false;
                }
            }).catch(e => {
                return Observable.throw('Internal Error');
            });
    }

    checkUserCanLogin(){
        const headers = new Headers({ 'Authorization': this.token });
        const options = new RequestOptions({headers: headers, url : this.util.apibaseurl + '/user', method: RequestMethod.Get });
        return this.http.request(new Request(options)).map((response: Response)=>{
            this.router.navigate(['/admin/manage']);  
            return false;
        }).catch(e => {
            return Observable.of(true);
        });
    }
}
