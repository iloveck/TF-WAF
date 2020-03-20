import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class BaseService {

  constructor(private http: HttpClient) { }

   public get({ url, options }: { url: string; options?: any; }): Observable<any>{
     return this.http.get(url, options);

  }

  public post({ url, params, options }: { url: string; params: any; options?: any; }): Observable<any> {
    return this.http.post(url, params, options);

  }

  public put(url: string, params: any, options?: any): Observable<any> {
    return this.http.put(url, params, options);
  }

}
