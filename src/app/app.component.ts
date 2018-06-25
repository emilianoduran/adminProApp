import { SettingsService } from './services/service.index';
import { DataCompanyService } from './services/shared/data-company.service';
import { Component, OnInit } from '@angular/core';
declare function init_plugins_theme();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _ajustes: SettingsService, public _cd: DataCompanyService) {
    // Inicializa los datos de Empresa
    this._cd.uploadData();
    init_plugins_theme();
  }
}
