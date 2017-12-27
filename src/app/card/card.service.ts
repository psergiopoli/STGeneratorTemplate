import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CardService {

  constructor(
      private http: HttpClient
    ) {}

  paginatedCards(pageSize,page){
    return this.http.get(environment.apibaseurl + '/card?page='+page+'&size='+pageSize);
  }

  createCard(card) {
    return this.http.post(environment.apibaseurl + '/card',card);
  }

  getModels(){
    return this.http.get(environment.apibaseurl + '/model/list');
  }

  getCard(cardId) {
    return this.http.get(environment.apibaseurl + '/card/' + cardId);
  }

  getCardByUUID(cardUUID){
    return this.http.get(environment.apibaseurl + '/card/hash/' + cardUUID);
  }

  countViewToCard(cardId){
    return this.http.patch(environment.apibaseurl + '/card/'+cardId,null);
  }
}
