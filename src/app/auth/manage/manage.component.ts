import { UtilService } from './../../shared/util.service';
import { CardAdminService } from './../card-admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(
    private cardAdminService: CardAdminService,
    private utilService: UtilService
  ) { }

  cards: any;
  currentPage: number = 0;
  pageSize: number = 8;
  loading: boolean = false;

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
}
