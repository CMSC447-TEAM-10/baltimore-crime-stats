import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TreeRoutingModule } from './tree-routing.module';
import { TreeImplementComponent } from './tree-implement/tree-implement.component';

@NgModule({
  imports: [
    CommonModule, TreeRoutingModule
  ],
  declarations: [TreeImplementComponent]
})
export class TreeModule { }