// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8000/api',
  // socketsUrl: 'http://localhost:8000',
  // webVotingUrl: 'http://localhost:8100/',
  
  // apiBaseUrl:  'https://i-sabi-server.onrender.com/api',
  socketsUrl: 'https://i-sabi-server.onrender.com',
  webVotingUrl: 'https://voting.i-sabi.com.ng/contestant/',
  versionCode: 5.2,
  firebaseConfig: {
    apiKey: "AIzaSyBxZ8gv4d0y4CXQ8cty-cNAAMPQ9AvvB7g",
    authDomain: "i-sabi-bd851.firebaseapp.com",
    projectId: "i-sabi-bd851",
    storageBucket: "i-sabi-bd851.appspot.com",
    messagingSenderId: "689315780305",
    appId: "1:689315780305:web:0b8e34d8b46966fc0817f0",
    measurementId: "G-4FT60JQ93C"
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


