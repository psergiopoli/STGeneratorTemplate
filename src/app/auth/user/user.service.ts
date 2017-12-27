import { AuthenticationService } from './../auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {
    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService
    ) {
    }

    getUser(){
        return this.http.get(environment.apibaseurl + '/user');
    }
}
