import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpService } from '@service/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends HttpService {

  // Moving further key needs to come from configuration
  apiKey: string = "efgh5678";

  private apiUrl: any = {
    getSearch: 'searchperson/'
  };

  constructor(http: HttpClient ) { super(http); }

  getSearch(searchTerm: string, pageNumber:number): Observable<any> {

    return super.get({
      url: environment.searchBaseURL + this.apiUrl.getSearch + searchTerm + "/" + pageNumber + "/" + "?code=" + this.apiKey, options: {
        responseType: 'json'
        }
      });
  }

}
