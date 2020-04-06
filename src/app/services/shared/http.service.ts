import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  get(apiUrl: string, url: string, id: string) {
    return this.http.get(apiUrl + url);
  }

  post(apiUrl: string, body: any, headers: any) {
    return this.http.post(apiUrl, body, headers);
  }

  constructor(private http: HttpClient) { }
}
