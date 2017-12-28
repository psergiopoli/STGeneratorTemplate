import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../auth/auth.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AppTokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector,private router: Router) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!environment.production){
      console.log(request);
      console.log(this.router.url);
    }
    
    if(this.router.url.indexOf('admin') >- 1){
      const auth = this.injector.get(AuthenticationService);
      if(auth.token != null){
        request = request.clone({
          setHeaders: {
            Authorization: auth.token
          }
        });
      }
    } 
    return next.handle(request);
  }
}