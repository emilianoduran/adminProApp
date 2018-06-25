import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { UserGoogle } from '../../Interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public USER: any = {};

  constructor(public _afAuth: AngularFireAuth) {
    console.log('Servicio auth en marcha');
    this.isAuth();
  }

  /**
   * logout
   */
  public logout() {
    return this._afAuth.auth.signOut();
  }

  /**
   * getAuth
   */

  public getAuth() {
    return this._afAuth.authState.map(auth => auth);
  }

  /**
   * loginGoogle
   */
  public loginGoogle() {
    return this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  /**
   * isAuth
   */
  public isAuth() {
    this.getAuth().subscribe(auth => {
      if (auth) {
        this.USER.id = auth.uid;
        this.USER.userName = auth.displayName;
        this.USER.useEmail = auth.email;
        this.USER.userPicture = auth.photoURL;
        this.USER.isLogin = true;
      } else {
        this.USER.isLogin = false;
      }
    });
  }
}
