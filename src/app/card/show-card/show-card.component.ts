import { UtilService } from './../../shared/util.service';
import { GlobalMessageService } from './../../global-message/global-message.service';
import { CardService } from './../card.service';
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
  shareUrl: string;

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,
    private globalMessageService: GlobalMessageService,
    private util: UtilService
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id']){
      this.shareUrl = this.util.sitebaseurl+'/card/'+params['id'];
      this.cardService.getCard(params['id']).subscribe(card => {
        card.uri = this.util.apibaseurl + '/' + card.uri;
        this.card = card;
        this.ready = true;
      }, error => {
        this.globalMessageService.addMessage(error, 'danger', 10);
      });
    }else if(params['uuid']){
      this.shareUrl = this.util.sitebaseurl+'/card/sec/'+params['uuid'];
      this.cardService.getCardByUUID(params['uuid']).subscribe(card => {
        card.uri = this.util.apibaseurl + '/' + card.uri;
        this.card = card;
        this.ready = true;
      }, error => {
        this.globalMessageService.addMessage(error, 'danger', 10);
      });
    }
    });
  }

  copyText(input){
    input.select();
    document.execCommand('copy');
  }

}
