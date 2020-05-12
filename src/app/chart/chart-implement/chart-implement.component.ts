import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../../database/database.service';
import { CrimeInfo } from './../../database/crime-info.model';

@Component({
  selector: 'app-chart-implement',
  templateUrl: './chart-implement.component.html',
  styleUrls: ['./chart-implement.component.css']
})
export class ChartImplementComponent implements OnInit {
  // https://www.positronx.io/create-angular-7-firebase-crud-app-with-angular-material-7/
  callData: any = [];

  constructor(private dbApi: DatabaseService) {
    this.dbApi.GetCalls()
    .snapshotChanges()
    .subscribe(calls => {
      calls.forEach(item => {
        let a = item.payload.toJSON();
        a['$KEY'] = item.key;
        this.callData.push(a as CrimeInfo)
      })
      console.log(this.callData);
    })
  }

  // do whatever with callData

  ngOnInit(): void {
  }
}
