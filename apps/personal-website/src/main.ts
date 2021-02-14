import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import firebase from 'firebase/app';
import 'firebase/analytics';

var firebaseConfig = {
  apiKey: "AIzaSyCl1bK7U9Wa5-4syKKV76oxbD6SQevkfvE",
  authDomain: "portfolio-jjs.firebaseapp.com",
  databaseURL: "https://portfolio-jjs-default-rtdb.firebaseio.com",
  projectId: "portfolio-jjs",
  storageBucket: "portfolio-jjs.appspot.com",
  messagingSenderId: "308189585100",
  appId: "1:308189585100:web:bc04255c612ff99e1eec69",
  measurementId: "G-9MT46YRPTR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
