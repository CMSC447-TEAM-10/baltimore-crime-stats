import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../../database/database.service';
import { CrimeInfo, DistrictCounts, TimeCount } from './../../database/crime-info.model';
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
  districtCountData: DistrictCounts[];
  timeCountData: TimeCount[];

  constructor(private dbApi: DatabaseService) {
    this.callData = this.dbApi.GetCalls()
    this.districtCountData = this.dbApi.GetNumCallsByDistrict();
    this.timeCountData = this.dbApi.GetNumCallsByCallDatetime();
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {}

  onDisplayCallsByDistrictBarChart(): void {
    /* Chart code */
    // Create chart instance
    let chart = am4core.create("num-calls-by-district-barchart", am4charts.XYChart);

    // add and sort data
    chart.data = this.districtCountData;
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

  onDisplayCallsOverTimeLineChart(): void {
    /* chart code */
    // Create chart instance
    let chart = am4core.create("num-calls-over-time-linechart", am4charts.XYChart);

    // add and sort data
    chart.data = this.timeCountData;
    chart.events.on("beforedatavalidated", () => {
      chart.data.sort((a, b) => {
        return (a.calldatetime - b.calldatetime);
      });
    });

    // Set input format for the dates
    // chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "# Calls";

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "count";
    series.dataFields.dateX = "calldatetime";
    dateAxis.baseInterval = {"timeUnit": "second", "count": 1}
    series.tooltipText = "{count}";
    series.strokeWidth = 2;
    series.minBulletDistance = 15;

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";

    // Make bullets grow on hover
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");

    let bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;

    // Make a panning cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panXY";
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;

    // Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();

    // Create a horizontal scrollbar and place it underneath the date axis
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX.parent = chart.bottomAxesContainer;

    dateAxis.start = 0.79;
    dateAxis.keepSelection = true;
  }
}
