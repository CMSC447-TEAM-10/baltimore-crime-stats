import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../../database/database.service';
import { CrimeInfo, CrimeType } from './../../database/crime-info.model';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-tree-implement',
  templateUrl: './tree-implement.component.html',
  styleUrls: ['./tree-implement.component.css']
})
export class TreeImplementComponent implements OnInit {
  callData: CrimeInfo[];
  descData: CrimeType[];

  constructor(private dbApi: DatabaseService) {
    this.callData = this.dbApi.GetCalls();
    this.descData = this.dbApi.GetNumCallsByDescription();
  }

  ngOnInit(): void {
  }

  onDisplayCallsByDestributionOfCrime() {
    let chart = am4core.create("distribution-of-crimes-by-description-tree", am4plugins_forceDirected.ForceDirectedTree);

    // add and sort data
    chart.data = this.descData;
    chart.data.sort((a, b) => (a.count < b.count ? -1 : 1));

    let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
    series.dataFields.value = "desc";
    series.dataFields.name = "count";

    // Add labels
    series.nodes.template.label.text = "{desc}";
    series.fontSize = 10;
    series.minRadius = 15;
    series.maxRadius = 40;

    // tooltip
    series.nodes.template.tooltipText = "{desc}: [bold]{count}[/]";
  }
}
