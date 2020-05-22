import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CirclechartImplementComponent } from './circlechart-implement/circlechart-implement.component'
import { CirclechartRoutingModule } from './circlechart-routing.module';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [CirclechartImplementComponent],
  imports: [
    CommonModule, CirclechartRoutingModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ]
})
export class CirclechartModule { }
