import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent {

  @Input() page: number;
  @Input() totalItens: number;
  @Input() totalPages: number;
  @Input() loading: boolean;
  @Input() pagesToShow: number;//numero de paginas que serao exibidas no componente
  @Input() firstPage: boolean;
  @Input() lastPage: boolean;
  

  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();

  constructor() { }

  onPage(n: number): void {
    this.goPage.emit(n);
  }

  onPrev(): void {
    this.goPrev.emit(true);
  }

  onNext(next: boolean): void {
    this.goNext.emit(next);
  }

  getPages(): number[] {
    const p = this.page || 0;
    const pages: number[] = [];
    pages.push(p);
    for (let i = 0; i < this.pagesToShow; i++) {
      if (pages.length < this.pagesToShow) {//se chegar no tamanho das paginas que é para exibir, nao adiciona mais paginas
        if (Math.min.apply(null, pages) > 0) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < this.pagesToShow) {
        if (Math.max.apply(null, pages) < (this.totalPages -1)) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  }

}
