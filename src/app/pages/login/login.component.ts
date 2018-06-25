import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/service.index';

declare let $: any;
// tslint:disable-next-line:no-unused-expression

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = true;
  constructor(public rute: Router, public _auth: AuthService) {}

  ngOnInit() {}

  /**
   * recuperaPass
   */
  public recuperaPass() {
    $('#loginform').slideUp();
    $('#recoverform').fadeIn();
  }
  /**
   * crearCuenta
   */
  public crearCuenta() {
    this.usuario = false;
  }

  cancelarRegenerar() {
    $('#loginform').slideDown();
    $('#recoverform').fadeOut();
  }

  /**
   * ingresar
   */
  public ingresar() {
    this.rute.navigate(['/dashboard']);
  }

  public loginWhitGoogle() {
    this._auth
      .loginGoogle()
      .then(res => {
        // TODO: Revisar esta función
        console.log(res);
        this._auth.USER.isLogin = true;
        this.rute.navigate(['/dashboard']);
      })
      .catch(err => console.log(err));
  }
}
