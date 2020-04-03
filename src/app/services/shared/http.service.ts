import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = 'https://mglo-member-api-dev.azurewebsites.net/api/v1'

  get(url: string, id: string) {
    return this.http.get(this.apiUrl + url);
  }

  post(url: string, body: any, headers: any) {
    return this.http.post(this.apiUrl + url, body, headers);
  }

  constructor(private http: HttpClient) { }
}
