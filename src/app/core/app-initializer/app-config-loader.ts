import { AppConfigService } from '@service/app-config.service';
import { AppConfig } from '@common/app-config';

export function AppConfigLoader(appConfigService: AppConfigService, appConfig: AppConfig) {
  return () => appConfigService.loadConfig().toPromise().then((config: any) => {
      appConfig.init(config);
    })
    .catch((err: any) => {
      console.error(err);
    });
}
