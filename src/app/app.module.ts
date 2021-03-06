import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// module
import { AppMainModule } from './app-main/app-main.module';
import { MapModule } from './map/map.module';
import { ChartModule } from './chart/chart.module';
import { CirclechartModule } from './circlechart/circlechart.module';
import { TreeModule } from './tree/tree.module';

// for firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// google map api
import { GoogleMapsModule } from '@angular/google-maps';

/* Angular CRUD services */
import { DatabaseService } from './database/database.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,

    // App Modules
    AppMainModule, MapModule, ChartModule, 
    CirclechartModule, TreeModule,

    // This needs to be imported after all App Modules get imported
    AppRoutingModule,

    // Route
    AppRoutingModule,

    // 3rd module
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

    // google maps module
    GoogleMapsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
