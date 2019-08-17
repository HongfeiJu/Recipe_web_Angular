import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private router: Router) { }

  signUpUser(email: string, password: string) {
    console.log('singup');
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then(
        response => {
          console.log(response);
          this.signInUser(email, password);
        }
      )
      . catch(
        error => console.log(error)
      );
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          console.log(response);
          this.router.navigate(['/recipes']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
        }
      ).catch(
        error => console.log(error)
    );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
  }

}
