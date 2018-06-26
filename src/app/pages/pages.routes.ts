import { RouterModule, Routes } from '@angular/router';
import { PagesComponent, DashboardComponent, AccountSettingComponent, DataCompanyComponent, ProjectsListComponent, NewProjectComponent } from './pages.index';
import { AuthGuard } from '../guards/auth.guard';

// ===================================
// Pages Components
// ===================================

const PAGE_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { title: 'Dashboard' } },
      { path: 'account-setting', component: AccountSettingComponent, canActivate: [AuthGuard], data: { title: 'Ajustes de Tema' } },
      { path: 'data-empresa', component: DataCompanyComponent, canActivate: [AuthGuard], data: { title: 'Datos de Empresa' } },
      { path: 'proyectos', component: ProjectsListComponent, canActivate: [AuthGuard], data: { title: 'Proyectos' } },
      { path: 'nuevo-proyecto', component: NewProjectComponent, canActivate: [AuthGuard], data: { title: 'Nuevo Proyecto' } }
    ]
  }
];
export const PAGE_ROUTING = RouterModule.forRoot(PAGE_ROUTES);
