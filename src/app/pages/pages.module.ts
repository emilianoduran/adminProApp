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

@NgModule({
  declarations: [AccountSettingComponent, DataCompanyComponent, DashboardComponent, PagesComponent],
  imports: [CommonModule, SharedModule, PAGE_ROUTING, FormsModule, ReactiveFormsModule],
  exports: [AccountSettingComponent, DataCompanyComponent, DashboardComponent, PagesComponent],
  providers: []
})
export class PagesModule {}
