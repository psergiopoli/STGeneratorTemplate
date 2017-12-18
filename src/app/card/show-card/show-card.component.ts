import { UtilService } from './../../shared/util.service';
import { GlobalMessageService } from './../../global-message/global-message.service';
import { CardService } from './../card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

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
    private util: UtilService,
    private router: Router,
    private fb: FacebookService
  ) {
    let initParams: InitParams = {
      appId: '313598605808575',
      xfbml: true,
      version: 'v2.8'
    };
     fb.init(initParams);
  }

  setCardValues(card){
    this.card = card;
    this.card.uri = this.util.apibaseurl + this.card.uri;
    this.ready = true;
    this.countView(this.card.id);
  }

  //todo
  //melhorar esse init com codigo duplicado
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id']){
      this.shareUrl = this.util.sitebaseurl+'/card/'+params['id'];
      this.cardService.getCard(params['id']).subscribe(card => {
        this.setCardValues(card);
      }, error => {
        this.router.navigate(['']);
        this.globalMessageService.addMessage(error, 'danger', 10);
      });
    }else if(params['uuid']){
      this.shareUrl = this.util.sitebaseurl+'/card/sec/'+params['uuid'];
      this.cardService.getCardByUUID(params['uuid']).subscribe(card => {
        this.setCardValues(card);
      }, error => {
        this.router.navigate(['']);
        this.globalMessageService.addMessage(error, 'danger', 10);
      });
    }
    });    
  }

  countView(cardId){
    this.cardService.countViewToCard(cardId).subscribe(response =>{
    },error =>{
      console.log(error);
    });
  }

  copyText(input){
    input.select();
    document.execCommand('copy');
  }

}
