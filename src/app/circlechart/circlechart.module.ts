import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CirclechartImplementComponent } from './circlechart-implement/circlechart-implement.component'
import { CirclechartRoutingModule } from './circlechart-routing.module';


@NgModule({
  declarations: [CirclechartImplementComponent],
  imports: [
    CommonModule, CirclechartRoutingModule
  ]
})
export class CirclechartModule { }
