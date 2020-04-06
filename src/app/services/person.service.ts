import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpService } from './shared/http.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpService: HttpService) { }

  createPerson(body): Observable<any> {
    return this.httpService.post(environment.createMemberUrl, body, {});
  }
}
