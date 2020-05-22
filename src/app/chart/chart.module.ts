import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartImplementComponent } from './chart-implement/chart-implement.component';
import { ChartRoutingModule } from './chart-routing.module';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [ChartImplementComponent],
  imports: [
    CommonModule, ChartRoutingModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ]
})
export class ChartModule { }
