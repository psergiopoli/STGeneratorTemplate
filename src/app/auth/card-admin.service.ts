import { AuthenticationService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { UtilService } from './../shared/util.service';
import { Http, Response, RequestOptions, RequestMethod, Request, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CardAdminService {

  constructor(
    private http: Http,
    private util: UtilService,
    private authService: AuthenticationService
  ) { }

  paginatedCards(pageSize,page){
    const headers = new Headers({ 'Authorization': this.authService.token });
    const options = new RequestOptions({headers: headers, url : this.util.apibaseurl + '/card/admin?page='+page+'&size='+pageSize, method: RequestMethod.Get });
    return this.http.request(new Request(options)).map((response: Response) =>
        response.json()
    ).catch(e => {
        return Observable.throw('Internal Error');
    });
  }

  publishCard(cardId) {
    const headers = new Headers({ 'Authorization': this.authService.token });
    const options = new RequestOptions({headers: headers, url : this.util.apibaseurl+'/card/publish/'+cardId, method: RequestMethod.Patch });

    return this.http.request(new Request(options)).map((response: Response) => {
        return true;
    }).catch(e => {
        return Observable.throw('Internal Error');
    });;
  }

  approveCard(cardId) {
    const headers = new Headers({ 'Authorization': this.authService.token });
    const options = new RequestOptions({headers: headers, url : this.util.apibaseurl+'/card/approve/'+cardId, method: RequestMethod.Patch });

    return this.http.request(new Request(options)).map((response: Response) => {
        return true;
    }).catch(e => {
        return Observable.throw('Internal Error');
    });;
  }
}