import { Injectable } from '@angular/core';
import { Util } from '@common/util';

@Injectable()
export class AppConfig {
  constructor(private util: Util) {
  }

  isInit = false;
  default: any = {createMemberUrl: '', createMembershipUrl: '', awarenessCodesUrl: '', searchBaseURL: '', searchApiKey: ''};
  config: any = {};

  get createMemberUrl(): string {
    return this.config.createMemberUrl;
  }
  get createMembershipUrl(): string {
    return this.config.createMembershipUrl;
  }
  get awarenessCodesUrl(): string {
    return this.config.awarenessCodesUrl;
  }
  get searchBaseURL(): string {
    return this.config.searchBaseURL;
  }
  get searchApiKey(): string {
    return this.config.searchApiKey;
  }

  public init(configJson: any): void {
        if (!this.isInit) {
        this.config = this.util.merge(this.default, configJson);
        this.isInit = true;
        } else {
            throw new Error('AppConfig is already initialzed');
        }
  }

}
