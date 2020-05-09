import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MapImplementComponent } from './map-implement/map-implement.component';


const map_routes: Routes = [
    { path: 'map-visualization', component: MapImplementComponent }
];

@NgModule({
    imports: [RouterModule.forChild(map_routes)],
    exports: [RouterModule],
})

export class MapRoutingModule {}