import { UtilService } from './../shared/util.service';
import { CardService } from './../card/card.service';
import { GlobalMessageService } from './../global-message/global-message.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {

  card;
  ready = false;

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,
    private globalMessageService: GlobalMessageService,
    private util: UtilService
  ) {

  }
    
     ngOnInit(): void {
       this.route.params.subscribe(params => {
         this.cardService.getCard(params['id']).subscribe(card =>{
          card.uri = this.util.apibaseurl+'/'+card.uri;
          this.card = card;
          this.ready = true;
         },error => {
           this.globalMessageService.addMessage(error,'danger',10);
         });
       });
      }

}
