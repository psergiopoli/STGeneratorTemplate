import { AuthenticationService } from './../auth.service';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '@env/environment';


@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService
    ) {
    }

    getUser(){
        const headers = new Headers({ 'Authorization': this.authenticationService.token });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(environment.apibaseurl + '/user', options).map((response: Response) => response.json());
    }
}
