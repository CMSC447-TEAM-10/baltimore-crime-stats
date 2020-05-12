import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../../database/database.service';
import { CrimeInfo, DistrictCounts } from './../../database/crime-info.model';
// https://www.amcharts.com/docs/v4/getting-started/using-typescript-or-es6/#Module_list
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: 'app-chart-implement',
  templateUrl: './chart-implement.component.html',
  styleUrls: ['./chart-implement.component.css']
})
export class ChartImplementComponent implements OnInit {
  // https://www.positronx.io/create-angular-7-firebase-crud-app-with-angular-material-7/
  callData: CrimeInfo[];
  data: DistrictCounts[];

  constructor(private dbApi: DatabaseService) {
    this.callData = this.dbApi.GetCalls()
    this.data = this.dbApi.GetNumCallsByDistrict();
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {}

  onDisplayCallsByDistrictBarChart():void {
    console.log('onDisplay()');
    /* Chart code */
    // Create chart instance
    let chart = am4core.create("num-calls-by-district-barchart", am4charts.XYChart);

    // add and sort data
    chart.data = this.data;
    chart.data.sort((a, b) => (a.count > b.count ? -1 : 1));

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "district";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.title.text = "District";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "# Calls";

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "count";
    series.dataFields.categoryX = "district";
    series.name = "Calls By District";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
  }
}
