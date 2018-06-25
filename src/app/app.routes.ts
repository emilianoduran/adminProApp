import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'app' } // Ruta por defecto
];
// Se exporta la constante que se utilizará en el archivo app.module.ts dentro de imports @ngModules[]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
