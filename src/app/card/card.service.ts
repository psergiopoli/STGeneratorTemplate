import { UtilService } from './../shared/util.service';
import { AuthenticationService } from './../auth/auth.service';
import { Component, Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Headers, Response, RequestOptions, RequestMethod, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardService {

  constructor(
      private http: Http,
      private util: UtilService
    ) {}

  paginatedCards(pageSize,page){
    const options = new RequestOptions({url : this.util.apibaseurl + '/card?page='+page+'&size='+pageSize, method: RequestMethod.Get });
    return this.http.request(new Request(options)).map((response: Response) =>
        response.json()
    ).catch(e => {
        return Observable.throw('Internal Error');
    });
  }

  createCard(card) {
    const options = new RequestOptions({url : this.util.apibaseurl + '/card', body: card, method: RequestMethod.Post });
    return this.http.request(new Request(options)).map((response: Response) =>
        response.json()
    ).catch(e => {
        return Observable.throw('Internal Error');
    });
  }

  getModels(){
    const options = new RequestOptions({url : this.util.apibaseurl + '/model/list', method: RequestMethod.Get });
    return this.http.request(new Request(options)).map((response: Response) =>
        response.json()
    ).catch(e => {
        return Observable.throw('Internal Error');
    });
  }

  getCard(cardId) {
    const options = new RequestOptions({url : this.util.apibaseurl + '/card/' + cardId, method: RequestMethod.Get });

    return this.http.request(new Request(options)).map((response: Response) =>
        response.json()
    ).catch(e => {
        return Observable.throw('Internal Error');
    });
  }

  getCardByUUID(cardUUID){
    const options = new RequestOptions({url : this.util.apibaseurl + '/card/hash/' + cardUUID, method: RequestMethod.Get });
    
    return this.http.request(new Request(options)).map((response: Response) =>
        response.json()
    ).catch(e => {
        return Observable.throw('Internal Error');
    });
  }

  countViewToCard(cardId){
    const options = new RequestOptions({url : this.util.apibaseurl + '/card/'+cardId, method: RequestMethod.Patch });
    
    return this.http.request(new Request(options)).map((response: Response) =>
        response.json()
    ).catch(e => {
        return Observable.throw('Internal Error');
    });
  }

  /*
  publishCard(cardId) {
    const headers = new Headers({ 'Authorization': this.authenticationService.token });
    const options = new RequestOptions({headers: headers, url : this.util.apibaseurl+'/card/publish/'+cardId, method: RequestMethod.Patch });

    return this.http.request(new Request(options)).map((response: Response) => {
        return true;
    }).catch(e => {
        return Observable.throw('Internal Error');
    });;
  }

  approveCard(cardId) {
    const headers = new Headers({ 'Authorization': this.authenticationService.token });
    const options = new RequestOptions({headers: headers, url : this.util.apibaseurl+'/card/approve/'+cardId, method: RequestMethod.Patch });

    return this.http.request(new Request(options)).map((response: Response) => {
        return true;
    }).catch(e => {
        return Observable.throw('Internal Error');
    });;
  }
  */
}
