import { Component, OnInit } from '@angular/core';
declare function init_plugins_theme();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {
  constructor() {
    init_plugins_theme();
  }

  ngOnInit() {
    // Esta función Inicializa los plugins del tema se coloca en este componente porque
    // Es el que agrupa todas las páginas
  }
}
