import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    // TODO: Escribir datos en base de datos
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',

      submenu: [{ titulo: 'Dashboard', url: '/dashboard' }]
    },
    {
      titulo: 'Portfolios',
      icono: 'mdi mdi-gauge',
      submenu: [{ titulo: 'Proyectos', url: '/projects' }, { titulo: 'Subir imágenes', url: '/upload' }]
    }
  ];

  constructor() {}
}
