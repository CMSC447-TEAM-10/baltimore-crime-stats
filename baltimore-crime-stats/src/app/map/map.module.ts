import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapImplementComponent } from './map-implement/map-implement.component';


@NgModule({
  imports: [
    CommonModule, MapRoutingModule
  ],
  declarations: [MapImplementComponent]
})
export class MapModule { }
