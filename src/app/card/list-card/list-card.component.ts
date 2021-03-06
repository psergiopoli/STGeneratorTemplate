import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  constructor(
    private cardService: CardService
  ) { }

  cards: any;
  currentPage: number = 0;
  pageSize: number = 8;
  loading: boolean = false;
  environment = environment;

  ngOnInit() {
    this.updateCards();
  }

  changePage(page){
    this.currentPage = page;
    this.updateCards();
  }

  nextPage(){
    this.currentPage++;
    this.updateCards();
  }

  previousPage(){
    this.currentPage--
    this.updateCards();
  }

  updateCards(){
    this.loading = true;
    this.cardService.paginatedCards(this.pageSize,this.currentPage).subscribe(cards =>{
      this.cards = cards;
      this.loading = false;
    });
  }

}
