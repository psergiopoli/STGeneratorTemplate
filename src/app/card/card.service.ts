import { Component,Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Card } from './card.resource';

@Injectable()
export class CardService {

  currentCard : Card;

  constructor(private http: HttpClient) {}

  getCard(card) {
     return this.http.get("http://localhost:8080/card/"+card).toPromise();
  }
}
