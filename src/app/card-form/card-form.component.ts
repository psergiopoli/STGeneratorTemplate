import { CardForm } from './cardForm';
import { CardService } from './../card/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  models: any;
  cardForm: CardForm;

  constructor(private cardService:CardService) { }

  ngOnInit() {
    this.cardService.getModels().subscribe(models =>{
      this.models = models;
    });
  }

  submitForm(form:CardForm){
    
  }


}
