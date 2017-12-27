import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { GlobalMessageService } from '../global-message/global-message.service';
import { environment } from '../../environments/environment';


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private globalMessageService: GlobalMessageService,) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!environment.production){
      console.log(request);
    }    
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        //success
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        switch(err.status) { 
          case 401: { 
            this.globalMessageService.addMessage("Acesso negado ao recurso: "+request.url, 'danger', 10);
          break; 
          } 
          case 403: { 
            this.globalMessageService.addMessage("Não autorizado acesso ao recurso: "+request.url, 'danger', 10);
          break; 
          } 
          case 500: { 
            this.globalMessageService.addMessage("Erro interno na API: "+request.url, 'danger', 10);
          break; 
          } 
          default: { 
            this.globalMessageService.addMessage("Erro: "+err.status +" no recurso:"+request.url, 'danger', 10);
          break; 
          } 
       } 
      }
    });
  }
}