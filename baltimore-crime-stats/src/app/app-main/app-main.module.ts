import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const MAIN_COMPONENTS = [NavbarComponent, SidebarComponent, FooterComponent, DashboardComponent, PageNotFoundComponent];

@NgModule({
  declarations: MAIN_COMPONENTS,
  imports: [
    CommonModule
  ],
  exports: MAIN_COMPONENTS
})
export class AppMainModule { }
