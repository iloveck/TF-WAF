import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpService } from '@service/http.service';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '@core/common/app-config';
import { SearchCriteria } from '../shared/models/search-criteria';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends HttpService {

  private apiUrl: any = {
    getSearch: 'searchperson/'
  };

  constructor(http: HttpClient, private appconfig: AppConfig ) { super(http); }

  getSearch(searchCriteria: SearchCriteria): Observable<any> {
      return super.post({
        url: this.appconfig.searchBaseURL + this.apiUrl.getSearch +
        '?code=' + this.appconfig.searchApiKey, params: JSON.stringify(searchCriteria), options: {
          responseType: 'json'
          }
        });
    }
}
