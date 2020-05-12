import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DatabaseService } from './../../database/database.service';
import { CrimeInfo } from './../../database/crime-info.model';
import { isNumeric } from 'rxjs/util/isNumeric';

@Component({
  selector: 'app-map-implement',
  templateUrl: './map-implement.component.html',
  styleUrls: ['./map-implement.component.css']
})
export class MapImplementComponent implements AfterViewInit {
  @ViewChild('mapContainer', {static: false}) baltimore_map: ElementRef;
  map: google.maps.Map;

  // Baltimore City latitude and longtitude
  latitude = 39.299236;
  longitude = -76.609383;
  markerArr = [];

  // store list of CrimeInfo as array
  callData: any = [];

  setCoordinate (latitude: number, longitude: number) {
    return new google.maps.LatLng(latitude, longitude);
  }

  addMarker (latitude: number, longitude: number, description: string) {
    const coordinate = this.setCoordinate(latitude, longitude);
    var marker = new google.maps.Marker(
      {
        position: coordinate,
        title: description
      }
    );
    this.markerArr.push(marker);
  }

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

  ngAfterViewInit() {
    const center = this.setCoordinate(this.latitude, this.longitude);
    const mapOption = {center, zoom: 8};
    this.map = new google.maps.Map(this.baltimore_map.nativeElement, mapOption);
  }

  // handling click event
  setMapOnAll(map) {
    for (var i = 0; i < this.markerArr.length; i++) {
      this.markerArr[i].setMap(map);
    }
  }

  onLow() {
    // Delete all markers first
    if (this.markerArr.length > 0) {
      this.setMapOnAll(null);
      this.markerArr = [];
    }
    
    // add markers to array
    for (var i = 0; i < this.callData.length; i++) {
      if (this.callData[i].priority === "Low") {
        this.addMarker(
          this.callData[i].location.latitude,
          this.callData[i].location.longitude,
          this.callData[i].description
        )
      }
    }

    // insert each marker to map
    this.setMapOnAll(this.map);
  }

  onMedium() {
    /*
    if (this.markerArr.length > 0) {
      this.setMapOnAll(null);
      this.markerArr = [];
    }

    for (var i = 0; i < this.callData.length; i++) {
      if (this.callData[i].priority === "Medium") {
        this.addMarker(
          this.callData[i].location.latitude,
          this.callData[i].location.longitude,
          this.callData[i].description
        )
      }
    }

    this.setMapOnAll(this.map);
    */
   for (var i = 0; i < this.callData.length; i++) {
     console.log("index: " + i + "  latitude: ");
   }
  }

  onHigh() {
    if (this.markerArr.length > 0) {
      this.setMapOnAll(null);
      this.markerArr = [];
    }
    
    for (var i = 0; i < this.callData.length; i++) {
      if (this.callData[i].priority === "High") {
        this.addMarker(
          this.callData[i].location.latitude,
          this.callData[i].location.longitude,
          this.callData[i].description
        )
      }
    }

    this.setMapOnAll(this.map);
  }
}
