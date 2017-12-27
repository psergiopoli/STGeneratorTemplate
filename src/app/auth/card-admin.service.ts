import { AuthenticationService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CardAdminService {

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) { }

  paginatedCards(pageSize,page){
    return this.http.get(environment.apibaseurl + '/card/admin?page='+page+'&size='+pageSize);
  }

  publishCard(cardId) {
    return this.http.patch(environment.apibaseurl+'/card/publish/'+cardId,null);
  }

  approveCard(cardId) {
    return this.http.patch(environment.apibaseurl+'/card/approve/'+cardId,null);
  }
}
