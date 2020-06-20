import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  public logged: BehaviorSubject<boolean>;

  constructor() {
    if (localStorage.getItem('session')){
      this.logged = new BehaviorSubject<boolean>(true);
    } else {
      this.logged = new BehaviorSubject<boolean>(false);
    }
  }

  logIn(username: string, password: string) {
    Auth.signIn(username, password).then(
      (response) => {
        localStorage.setItem('session', response['Session'] );
        this.logged.next(true);
      }
    )
  }

  logout() {
    Auth.signOut();
    localStorage.clear();
    this.logged.next(false);
  }

}
