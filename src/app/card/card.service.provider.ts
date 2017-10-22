/* tslint:disable:one-line */
import { CardService } from './card.service';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

let cardServiceFactory = (http: HttpClient) => {
  return new CardService(http);
};

export let cardServiceProvider =
  { provide: CardService,
    useFactory: cardServiceFactory,
    deps: [HttpClient]
  };
