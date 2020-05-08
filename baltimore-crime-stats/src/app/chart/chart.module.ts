import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartImplementComponent } from './chart-implement/chart-implement.component';



@NgModule({
  declarations: [ChartImplementComponent],
  imports: [
    CommonModule
  ],
  exports: [ChartImplementComponent] 
})
export class ChartModule { }
