import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  // se define la propiedad
  public ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };
  constructor(@Inject(DOCUMENT) private document: any) {
    this.cargarAjustes();
  }

  /**
   * guardarAjustes
   */
  public guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  /**
   * cargarAjustes
   */
  public cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
    } else {
      this.aplicarTema(this.ajustes.tema);
    }
  }

  /**
   * aplicarTema
   */
  public aplicarTema(color: string) {
    const url = `assets/css/colors/${color}.css`;
    this.document.getElementById('theme').setAttribute('href', url);

    this.ajustes.tema = color;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }
}
// Define la interface de la estructura de ajustes.
interface Ajustes {
  temaUrl: string;
  tema: string;
}
