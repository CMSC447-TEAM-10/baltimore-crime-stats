import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CirclechartImplementComponent } from './circlechart-implement/circlechart-implement.component'

const chart_routes: Routes = [
    { path: 'piechart-visualization', component: CirclechartImplementComponent }
];

@NgModule({
    imports: [RouterModule.forChild(chart_routes)],
    exports: [RouterModule]
})

export class CirclechartRoutingModule {}