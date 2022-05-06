// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: {
    blog: {
      immagini: '/blog/media/immagini',
      articoli: '/blog/media/articoli'
    }
  },
  firebaseConfig: {
    apiKey: "AIzaSyArey947zHHmtMAvwMaa4A6lP6bHlcgRJc",
    authDomain: "blogsiteproject-570a4.firebaseapp.com",
    projectId: "blogsiteproject-570a4",
    storageBucket: "blogsiteproject-570a4.appspot.com",
    messagingSenderId: "336989683463",
    appId: "1:336989683463:web:05fdd95c06d65a5c144fa2",
    measurementId: "G-4T5RYTG7RF"
  },
  loggerServiceActive: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
