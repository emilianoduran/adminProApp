import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SidebarService, AuthService, DataCompanyService } from './service.index';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [SettingsService, SidebarService, AuthService, DataCompanyService]
})
export class ServiceModule {}
