import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { CrimeInfo, DistrictCounts, TimeCount, CrimeType } from './crime-info.model';

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
  GetNumCallsByDistrict(): DistrictCounts[] {
    let districts: DistrictCounts[] = [];
    this.callRef
    .snapshotChanges()
    .subscribe(calls => {
      calls.forEach(item => {
        let a = <CrimeInfo> item.payload.toJSON();
        a['$KEY'] = item.key;
        // skip data rows that have no district data
        if (!a.district) return;  
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

  /* Get number of calls per date */
  GetNumCallsByCallDatetime(): TimeCount[] {
    let calldatetimes: TimeCount[] = [];
    this.callRef
    .snapshotChanges()
    .subscribe(calls => {
      calls.forEach(item => {
        let a = <CrimeInfo> item.payload.toJSON();
        a['$KEY'] = item.key;
        // skip data rows that have no calldatetime data
        if (!a.calldatetime) return;
        let calldatetime: Date = new Date(a.calldatetime);
        let index: number = calldatetimes.findIndex(x => x.calldatetime.getHours() == calldatetime.getHours());
        if (index === -1) {
          calldatetimes.push({calldatetime: calldatetime, count: 1});
        } else {
          calldatetimes[index].count++;
        }
      });
    });
    return calldatetimes;
  }

  /* Get number of calls by description */
  GetNumCallsByDescription(): CrimeType[] {
    let descriptions: CrimeType[] = [];
    this.callRef
    .snapshotChanges()
    .subscribe(calls => {
      calls.forEach(item => {
        let a = <CrimeInfo> item.payload.toJSON();
        a['$KEY'] = item.key;
        // skip data rows that have no description data
        if (!a.description) return;
        let description: string = a.description;
        let index: number = descriptions.findIndex(x => x.desc == description);
        if (index === -1) {
          descriptions.push({desc: description, count: 1});
        } else {
          descriptions[index].count++;
        }
      });
    });
    return descriptions;
  }
}
