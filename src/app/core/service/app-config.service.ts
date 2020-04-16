import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Util } from '@common/util';
import { HttpService } from '@service/http.service';
import { Observable } from 'rxjs';

@Injectable()
export class AppConfigService extends HttpService {

  private apiUrl: any = {
    config: 'config/app-config.json'
   };
  constructor(http: HttpClient, private util: Util) { super(http); }

  public loadConfig(): Observable<any> {
      return this.get({url: this.apiUrl.config});
  }
}

