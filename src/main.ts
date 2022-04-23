import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArey947zHHmtMAvwMaa4A6lP6bHlcgRJc",
  authDomain: "blogsiteproject-570a4.firebaseapp.com",
  projectId: "blogsiteproject-570a4",
  storageBucket: "blogsiteproject-570a4.appspot.com",
  messagingSenderId: "336989683463",
  appId: "1:336989683463:web:05fdd95c06d65a5c144fa2",
  measurementId: "G-4T5RYTG7RF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
