import { AuthenticationService } from './../auth/auth.service';
import { apibaseurl } from './../api.baseurl';
import { Component,Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers, Response, RequestOptions, RequestMethod, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardService {

  constructor(private http: Http,private authenticationService:AuthenticationService) {}

  getCard(cardId) {
    const options = new RequestOptions({url : apibaseurl+'/card/'+cardId, method: RequestMethod.Get });
    
    return this.http.request(new Request(options)).map((response: Response) => 
        response.json()
    ).catch(e => {
        return Observable.throw('Internal Error');
    });;
  }

  publishCard(cardId) {
    const headers = new Headers({ 'Authorization': this.authenticationService.token });
    const options = new RequestOptions({headers: headers, url : apibaseurl+'/card/publish/'+cardId, method: RequestMethod.Patch });
    
    return this.http.request(new Request(options)).map((response: Response) => {
        return true;
    }).catch(e => {
        return Observable.throw('Internal Error');
    });;
  }

  approveCard(cardId) {
    const headers = new Headers({ 'Authorization': this.authenticationService.token });
    const options = new RequestOptions({headers: headers, url : apibaseurl+'/card/approve/'+cardId, method: RequestMethod.Patch });
    
    return this.http.request(new Request(options)).map((response: Response) => {
        return true;
    }).catch(e => {
        return Observable.throw('Internal Error');
    });;
  }
}