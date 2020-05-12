import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../../database/database.service';
import { CrimeInfo } from './../../database/crime-info.model';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
am4core.useTheme(am4themes_animated);

import { CrimeType } from './distribution.model';


@Component({
  selector: 'app-tree-implement',
  templateUrl: './tree-implement.component.html',
  styleUrls: ['./tree-implement.component.css']
})
export class TreeImplementComponent implements OnInit {
  callData: CrimeInfo[];
  data: CrimeType[];

  constructor(private dbApi: DatabaseService) {
    this.callData = this.dbApi.GetCalls();
  }

  ngOnInit(): void {
  }

  onDisplayCallsByDestributionOfCrime() {

    for (var i = 0; i < this.callData.length; i++) {
      let call: CrimeInfo = this.callData[i];

      if (this.data === undefined || this.data.length === 0) {
        var temp: CrimeType;
        temp.desc = call.description;
        temp.count = 1;
        this.data.push(temp);
      }

      for (var j = 0; j < this.data.length; j++) {
        var check = false;

        if (this.data[j].desc !== undefined && (call.description === this.data[j].desc)) {
          this.data[j].count++;
          check = true;
          break;
        }

        if (check === false) {
          var temp: CrimeType;
          temp.desc = call.description;
          temp.count = 1;
          this.data.push(temp);
        }
      }
    }

    let chart = am4core.create("distribution-of-crimes-by-description-tree", am4plugins_forceDirected.ForceDirectedTree);
    let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
    series.dataFields.value = "desc";
    series.dataFields.name = "count";
  }
}
