import { Injectable } from '@angular/core';
import { HttpService } from './shared/http.service';
import { environment } from '../../environments/environment';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {

  constructor(private httpService: HttpService) { }

  get(): Observable<any> {
    return this.httpService.get(environment.memberUrl + '/common/lookup');
  }
}
