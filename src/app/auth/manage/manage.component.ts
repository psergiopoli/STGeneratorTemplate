import { CardAdminService } from './../card-admin.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(
    private cardAdminService: CardAdminService
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
    this.cardAdminService.paginatedCards(this.pageSize,this.currentPage).subscribe(cards =>{
      this.cards = cards;
      this.loading = false;
    });
  }

  publishCard(event,cardId){
    event.target.disabled = true;
    this.cardAdminService.publishCard(cardId).subscribe(result =>{
      event.target.disabled = false;
    });
  }

  approveCard(event,cardId){
    event.target.disabled = true;
    this.cardAdminService.approveCard(cardId).subscribe(result =>{
      event.target.disabled = false;
    });
  }
}
