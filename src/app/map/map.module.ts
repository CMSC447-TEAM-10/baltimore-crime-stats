import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapImplementComponent } from './map-implement/map-implement.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule, MapRoutingModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, GoogleMapsModule
  ],
  declarations: [MapImplementComponent]
})
export class MapModule { }
