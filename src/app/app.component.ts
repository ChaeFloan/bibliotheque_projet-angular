import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBAkHIREyQfPUTHzyb08Y11pj_6p0LJzas",
      authDomain: "mon-projet-angular-de191.firebaseapp.com",
      databaseURL: "https://mon-projet-angular-de191-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "mon-projet-angular-de191",
      storageBucket: "mon-projet-angular-de191.appspot.com",
      messagingSenderId: "557036345537",
      appId: "1:557036345537:web:7eb654cc297d0a9b63dc40"
    };

    const app = initializeApp(firebaseConfig);
  }
}
