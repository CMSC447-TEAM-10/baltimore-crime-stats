import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../../database/database.service';
import { CrimeInfo } from './../../database/crime-info.model';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-circlechart-implement',
  templateUrl: './circlechart-implement.component.html',
  styleUrls: ['./circlechart-implement.component.css']
})
export class CirclechartImplementComponent implements OnInit {
  callData: CrimeInfo[];
  data: any[];

  constructor(private dbApi: DatabaseService) { 
    this.callData = this.dbApi.GetCalls();
  }

  ngOnInit(): void {
  }

  onShow() {
    var high = 0;
    var medium = 0;
    var low = 0;
    var non_emergency = 0;

    for (var i = 0; i < this.callData.length; i++) {
      let call: CrimeInfo = this.callData[i];
      if (call.priority === "High") {
        high++;
      }
      else if (call.priority === "Medium") {
        medium++;
      }
      else if (call.priority === "Low") {
        low++;
      }
      else {
        non_emergency++;
      }
    } 

    let chart = am4core.create("chartdiv", am4charts.PieChart);

    chart.data = [
      {
        "priority": "Non-Emergency",
        "count": non_emergency
      },
      {
        "priority": "Low",
        "count": low
      },
      {
        "priority": "Medium",
        "count": medium
      },
      {
        "priority": "High",
        "count": high
      }
    ];

    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "cases";
    pieSeries.dataFields.category = "priority";
  }
}
