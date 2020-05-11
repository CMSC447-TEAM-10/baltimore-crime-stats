import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartImplementComponent } from './chart-implement/chart-implement.component';
import { ChartRoutingModule } from './chart-routing.module';


@NgModule({
  declarations: [ChartImplementComponent],
  imports: [
    CommonModule, ChartRoutingModule
  ]
})
export class ChartModule { }
