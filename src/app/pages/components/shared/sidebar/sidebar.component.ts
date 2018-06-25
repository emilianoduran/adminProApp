import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserGoogle } from '../../../../Interfaces/user.interface';
import { SidebarService, AuthService } from '../../../../services/service.index';
declare function init_plugins_theme();

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  public USER: UserGoogle;
  constructor(public _sidebar: SidebarService, public _auth: AuthService, public router: Router) {
    init_plugins_theme();
    this.USER = this._auth.USER;
  }

  ngOnInit() {}

  public logOut() {
    this._auth.logout();
    this.router.navigate(['/login']);
  }
}
