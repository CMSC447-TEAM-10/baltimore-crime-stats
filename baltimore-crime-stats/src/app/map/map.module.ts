import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapImplementComponent } from './map-implement/map-implement.component';



@NgModule({
  declarations: [MapImplementComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MapImplementComponent
  ]
})
export class MapModule { }
