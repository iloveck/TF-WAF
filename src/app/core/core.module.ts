import { NgModule, ModuleWithProviders , APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CachingInterceptor } from '@httpinterceptor/cache-http-interceptor';
import { TokenHttpInterceptor } from '@httpinterceptor/token-http-interceptor';
import { DataLoader } from '@appinitialzer/data-loader';
import { AppConfigLoader } from '@appinitialzer/app-config-loader';
import { Logger } from '@exceptionhandling/logger';
import { LogService } from '@service/log.service';
import { AppConfigService } from '@service/app-config.service';
import { Util } from '@common/util';
import { AppConfig } from '@common/app-config';
import { HttpInMemoryCache } from '@cache/http-in-memory-cache';
import { InMemoryCache } from '@cache/in-memory-cache';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
  ],
  exports: [

  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AppConfigService,
        Logger,
        AppConfig,
        LogService,
        Util,
        HttpInMemoryCache,
        InMemoryCache,
        // { provide: HTTP_INTERCEPTORS, useClass: TokenHttpInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
        {
          provide: APP_INITIALIZER, useFactory: DataLoader, multi: true,
          deps: [Logger]
        },
        {
          provide: APP_INITIALIZER, useFactory: AppConfigLoader, multi: true,
          deps: [AppConfigService, AppConfig]
        },

      ]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }

}

export {
  LogService,
  Logger,
  Util,
  InMemoryCache,
  HttpInMemoryCache
};
