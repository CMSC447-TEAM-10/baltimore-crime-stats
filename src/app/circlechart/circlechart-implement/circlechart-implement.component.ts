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

  onDisplayCallsByPriorityPieChart() {
    var high = 0;
    var medium = 0;
    var low = 0;
    var non_emergency = 0;
    var out_of_service = 0;
    var emergency = 0;
    var no_value = 0;

    for (var i = 0; i < this.callData.length; i++) {
      let call: CrimeInfo = this.callData[i];
      if (call.priority && call.priority === "High") {
        high++;
      }
      else if (call.priority && call.priority === "Medium") {
        medium++;
      }
      else if (call.priority && call.priority === "Low") {
        low++;
      }
      else if (call.priority && call.priority === "Out of Service") {
        out_of_service++;
      }
      else if (call.priority && call.priority === "Emergency") {
        emergency++;
      }
      else if (call.priority && call.priority === "Non-Emergency") {
        non_emergency++;
      }
      else {
        no_value++;
      }
    }

    let chart = am4core.create("pct-calls-by-priority-piechart", am4charts.PieChart);

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
      },
      {
        "priority": "Out of Service",
        "count": out_of_service
      },
      {
        "priority": "Emergency",
        "count": emergency
      },
      {
        "priority": "(No value)",
        "count": no_value
      }
    ];

    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "count";
    pieSeries.dataFields.category = "priority";
  }
}
