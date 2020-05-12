import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TreeImplementComponent } from './tree-implement/tree-implement.component'


const map_routes: Routes = [
    { path: 'directedtree-visualization', component: TreeImplementComponent }
];

@NgModule({
    imports: [RouterModule.forChild(map_routes)],
    exports: [RouterModule],
})

export class TreeRoutingModule {}