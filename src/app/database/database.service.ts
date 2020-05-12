import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { CrimeInfo, DistrictCounts } from './crime-info.model';

@Injectable({
  providedIn: 'root'
})

// https://www.positronx.io/create-angular-7-firebase-crud-app-with-angular-material-7/
// https://www.positronx.io/angular-7-firebase-5-crud-operations-with-reactive-forms/
export class DatabaseService {
  callRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.callRef = this.db.list('calls');
  }

  /* Get list of calls */
  GetCalls(): CrimeInfo[] {
    let callData: CrimeInfo[] = [];
    this.callRef
    .snapshotChanges()
    .subscribe(calls => {
      calls.forEach(item => {
        let a = item.payload.toJSON();
        a['$KEY'] = item.key;
        callData.push(a as CrimeInfo)
      });
    });
    return callData;
  }

  /* Get number of calls per district */
  // This function is async somehow and needs a callback function praram
  GetNumCallsByDistrict(): DistrictCounts[] {
    let districts: DistrictCounts[] = [];
    this.callRef
    .snapshotChanges()
    .subscribe(calls => {
      calls.forEach(item => {
        let a = <CrimeInfo> item.payload.toJSON();
        a['$KEY'] = item.key;
        let district: string = a.district;
        let index: number = districts.findIndex(x => x.district == district);
        if (index === -1) {
          districts.push({district: district, count: 1});
        } else {
          districts[index].count++;
        }
      });
    });
    return districts;
  }
}
