import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
import { AuthenticationService } from './auth.service';
import { UtilService } from '../shared/util.service';
 
@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService,
        private util:UtilService
    ) {
    }
 
    getUser(){
        let headers = new Headers({ 'Authorization': this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.util.apibaseurl+'/user', options).map((response: Response) => response.json());
    }
}