import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserGoogle } from '../../../../interfaces/user.interface';
import { AuthService } from '../../../../services/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  public USER: UserGoogle;
  constructor(public router: Router, public _auth: AuthService) {
    this.onUserLogin();
    this.USER = this._auth.USER;
  }

  ngOnInit() {}

  /**
   * onUserLogin
   */
  public onUserLogin() {
    // Comprueba si el usuario está logeado;
    this._auth.getAuth().subscribe(auth => auth);
  }

  /**
   * logOut
   */
  public logOut() {
    this._auth.logout();
    this.router.navigate(['/login']);
  }
}
