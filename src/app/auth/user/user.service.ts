import { UtilService } from './../../shared/util.service';
import { AuthenticationService } from './../auth.service';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService,
        private util: UtilService
    ) {
    }

    getUser(){
        const headers = new Headers({ 'Authorization': this.authenticationService.token });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(this.util.apibaseurl + '/user', options).map((response: Response) => response.json());
    }
}