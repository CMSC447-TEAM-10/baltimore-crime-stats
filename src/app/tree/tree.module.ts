import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TreeRoutingModule } from './tree-routing.module';
import { TreeImplementComponent } from './tree-implement/tree-implement.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  imports: [
    CommonModule, TreeRoutingModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  declarations: [TreeImplementComponent]
})
export class TreeModule { }