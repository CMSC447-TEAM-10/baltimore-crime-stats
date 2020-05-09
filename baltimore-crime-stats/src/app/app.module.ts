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
import { LoginModule } from './login/login.module';

// for firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,

    // App Modules
    AppMainModule, MapModule, ChartModule, LoginModule,

    // This needs to be imported after all App Modules get imported
    AppRoutingModule,

    // Route
    AppRoutingModule,

    // 3rd module
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
