import { Component,Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { CardService } from './card.service';
import { Card } from './card.resource';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  providers: [CardService]
})

export class CardDetailsComponent {

  ready = false;
  card;
  cardUrl;

  constructor(private http: HttpClient,private cardService: CardService,private route: ActivatedRoute) {

  }

  setCard(data){
    this.card = data;
    this.cardUrl = 'http://localhost:8080/cardImage/'+data.id
    this.ready = true;
  }

 ngOnInit(): void {
   this.route.params.subscribe(params => {
     this.cardService.getCard(params['id']).then(data => this.setCard(data));
   });
  }


}
