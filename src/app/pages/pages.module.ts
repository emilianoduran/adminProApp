import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ===================================
// Routes
// ===================================
import { PAGE_ROUTING } from './pages.routes';

import { SharedModule } from './components/shared/shared.module';
import { AccountSettingComponent } from './components/account-setting/account-setting.component';
import { DataCompanyComponent } from './components/data-company/data-company.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectComponent } from './components/project/project.component';
import { NewProjectComponent } from './components/new-project/new-project.component';

@NgModule({
  declarations: [AccountSettingComponent, DataCompanyComponent, DashboardComponent, PagesComponent, ProjectsListComponent, ProjectComponent, NewProjectComponent],
  imports: [CommonModule, SharedModule, PAGE_ROUTING, FormsModule, ReactiveFormsModule],
  exports: [AccountSettingComponent, DataCompanyComponent, DashboardComponent, PagesComponent],
  providers: []
})
export class PagesModule {}
