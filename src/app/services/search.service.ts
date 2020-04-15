import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpService } from '@service/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SearchCriteria } from '../shared/models/search-criteria';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends HttpService {

  // Moving further key needs to come from configuration

  private apiUrl: any = {
    getSearch: 'searchperson/'
  };

  constructor(http: HttpClient ) { super(http); }

  getSearch(searchCriteria: SearchCriteria): Observable<any> {
      return super.post({
        url: environment.searchBaseURL + this.apiUrl.getSearch + '?code=' + environment.searchApiKey, params: JSON.stringify(searchCriteria), options: {
          responseType: 'json'
          }
        });
    }
}
