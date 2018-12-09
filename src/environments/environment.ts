// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    clientID: '4yHlbRXVaNKE1SNfGL2peRAuU1EaBlub',
    domain: 'capitalonefinancialplanner.auth0.com', // e.g., you.auth0.com
    audience: 'http://localhost:3000/', // e.g., http://localhost:3001
    redirect: 'http://localhost:9000/callback',
    scope: 'shuvradipta.cse@gmail.com'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.