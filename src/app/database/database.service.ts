import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

// https://www.positronx.io/create-angular-7-firebase-crud-app-with-angular-material-7/
// https://www.positronx.io/angular-7-firebase-5-crud-operations-with-reactive-forms/
export class DatabaseService {
  callsRef: AngularFireList<any>;
  callRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  /* Get a call */
  GetCall(id: string) {
    this.callRef = this.db.object('calls/' + id);
    return this.callRef;
  }

  /* Get list of calls */
  GetCalls() {
    this.callsRef = this.db.list('calls');
    return this.callsRef;
  }
}
