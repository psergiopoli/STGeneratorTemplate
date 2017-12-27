import { CardService } from './../card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { environment } from '@env/environment';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {

  card;
  ready = false;
  shareUrl: string;
  initParams: InitParams = {
    appId: '313598605808575',
    xfbml: true,
    version: 'v2.11'
  };

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,    
    private router: Router,
    private fb: FacebookService
  ) {
  }

  setCardValues(card){
    this.card = card;
    this.card.uri = environment.apibaseurl + this.card.uri;
    this.ready = true;
    this.countView(this.card.id);
  }

  //todo
  //melhorar esse init com codigo duplicado
  ngOnInit(): void {
    this.fb.init(this.initParams);
    this.route.params.subscribe(params => {
      if(params['id']){
      this.shareUrl = environment.sitebaseurl+'/card/'+params['id'];
      this.cardService.getCard(params['id']).subscribe(card => {
        this.setCardValues(card);
      }, error => {
        this.router.navigate(['']);
      });
    }else if(params['uuid']){
      this.shareUrl = environment.sitebaseurl+'/card/sec/'+params['uuid'];
      this.cardService.getCardByUUID(params['uuid']).subscribe(card => {
        this.setCardValues(card);
      }, error => {
        this.router.navigate(['']);
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
