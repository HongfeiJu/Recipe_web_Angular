import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageSelection = 'recipe';
  onNavigate(para: string) {
    this.pageSelection = para;
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyDahEvonfdTMofjJy5rmIeBunQOhCASoVk',
      authDomain: 'hongfei-recipe.firebaseapp.com'
    });
  }
}
