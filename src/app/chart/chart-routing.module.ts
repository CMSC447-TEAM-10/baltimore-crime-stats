import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChartImplementComponent } from './chart-implement/chart-implement.component';

const chart_routes: Routes = [
    { path: 'chart-visualization', component: ChartImplementComponent }
];

@NgModule({
    imports: [RouterModule.forChild(chart_routes)],
    exports: [RouterModule]
})

export class ChartRoutingModule {}