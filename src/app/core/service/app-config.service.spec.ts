import { TestBed} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppConfigService } from './app-config.service';
import { Util } from '@common/util';
import { HttpClient } from '@angular/common/http';

describe('AppConfigService', () => {
    let httpClient: HttpClient;
    let service: AppConfigService;
    let httpTestingController: HttpTestingController;
    let util: Util;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [AppConfigService, Util]
      });
      service = TestBed.inject(AppConfigService);
      httpTestingController = TestBed.inject(HttpTestingController);
      httpClient = TestBed.inject(HttpClient);
      util = TestBed.inject(Util);
    });

    afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpTestingController.verify();
      });
    it('should create an instance', () => {
        expect(new AppConfigService(httpClient, util)).toBeTruthy();
    });

});
