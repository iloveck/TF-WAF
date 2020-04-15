// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  createMemberUrl: 'https://mglo-member-api-dev.azurewebsites.net/api/v1/person',
  createMembershipUrl: 'https://mglo-membership-api-dev.azurewebsites.net/api/v1/account',
  awarenessCodesUrl: 'https://mglo-membership-api-dev.azurewebsites.net/api/v1/awarenesscodes',
  searchBaseURL: 'https://mglo-search-api-dev.azurewebsites.net/api/v1/',
  searchApiKey: 'efgh5678'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
