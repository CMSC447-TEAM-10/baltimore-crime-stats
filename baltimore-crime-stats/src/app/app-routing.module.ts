import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapImplementComponent } from './map/map-implement/map-implement.component';
import { ChartImplementComponent } from './chart/chart-implement/chart-implement.component';
import { LoginImplementComponent } from './login/login-implement/login-implement.component';
import { DashboardComponent } from './app-main/dashboard/dashboard.component';
import { PageNotFoundComponent } from './app-main/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'map-visualization', component: MapImplementComponent },
  { path: 'chart-visualization', component: ChartImplementComponent },
  { path: 'login-visualization', component: LoginImplementComponent },
  { path: 'main-dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'main-dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
