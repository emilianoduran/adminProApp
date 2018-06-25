import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ===================================
// Shareds Components
// ===================================

import { BredcrumbsComponent } from './bredcrumbs/bredcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [BredcrumbsComponent, HeaderComponent, NotpagefoundComponent, SidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [BredcrumbsComponent, HeaderComponent, NotpagefoundComponent, SidebarComponent],
  providers: []
})
export class SharedModule {}
