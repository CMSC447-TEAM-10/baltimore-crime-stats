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
  callData: CrimeInfo[];

  setCoordinate (latitude: number, longitude: number) {
    return new google.maps.LatLng(latitude, longitude);
  }

  addMarker (latitude: number, longitude: number, description: string, markerColor: any) {
    const coordinate = this.setCoordinate(latitude, longitude);
    var marker = new google.maps.Marker(
      {
        position: coordinate,
        title: description,
        icon: markerColor
      }
    );
    this.markerArr.push(marker);
  }

  constructor(private dbApi: DatabaseService) {
    this.callData = this.dbApi.GetCalls();
  }

  ngAfterViewInit() {
    const center = this.setCoordinate(this.latitude, this.longitude);
    const mapOption = {center, zoom: 11};
    this.map = new google.maps.Map(this.baltimore_map.nativeElement, mapOption);
  }

  // handling click event
  setMapOnAll(map: google.maps.Map) {
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

    let color = {
      url: "http://maps.google.com/mapfiles/ms/icons/blue.png"
    };

    // add markers to array
    for (var i = 0; i < this.callData.length; i++) {
      let call: CrimeInfo = this.callData[i];
      if (call.priority && call.priority === "Low") {
        // only add the marker if location attribute exists
        // and if longitude and latitude are Numeric
        if (call.location && isNumeric(call.location.longitude) && isNumeric(call.location.latitude)) {
          this.addMarker(
            call.location.latitude,
            call.location.longitude,
            call.description,
            color
          )
        }
      }
    }

    // insert each marker to map
    this.setMapOnAll(this.map);
  }

  onMedium() {
    if (this.markerArr.length > 0) {
      this.setMapOnAll(null);
      this.markerArr = [];
    }

    let color = {
      url: "http://maps.google.com/mapfiles/ms/icons/yellow.png"
    };

    for (var i = 0; i < this.callData.length; i++) {
      let call: CrimeInfo = this.callData[i];
      if (call.priority && call.priority === "Medium") {
        // only add the marker if location attribute exists
        // and if longitude and latitude are Numeric
        if (call.location && isNumeric(call.location.longitude) && isNumeric(call.location.latitude)) {
          this.addMarker(
            call.location.latitude,
            call.location.longitude,
            call.description,
            color
          )
        }
      }
    }

    this.setMapOnAll(this.map);
  }

  onHigh() {
    if (this.markerArr.length > 0) {
      this.setMapOnAll(null);
      this.markerArr = [];
    }

    let color = {
      url: "http://maps.google.com/mapfiles/ms/icons/red.png"
    };

    for (var i = 0; i < this.callData.length; i++) {
      let call: CrimeInfo = this.callData[i];
      if (call.priority && call.priority === "High") {
        // only add the marker if location attribute exists
        // and if longitude and latitude are Numeric
        if (call.location && isNumeric(call.location.longitude) && isNumeric(call.location.latitude)) {
          this.addMarker(
            call.location.latitude,
            call.location.longitude,
            call.description,
            color
          )
        }
      }
    }

    this.setMapOnAll(this.map);
  }

  onAll() {
    if (this.markerArr.length > 0) {
      this.setMapOnAll(null);
      this.markerArr = [];
    }

    let red_color = {
      url: "http://maps.google.com/mapfiles/ms/icons/red.png"
    };

    let yellow_color = {
      url: "http://maps.google.com/mapfiles/ms/icons/yellow.png"
    };

    let blue_color = {
      url: "http://maps.google.com/mapfiles/ms/icons/blue.png"
    };

    for (var i = 0; i < this.callData.length; i++) {
      let call: CrimeInfo = this.callData[i];
      if (call.priority && call.priority === "High") {
        if (call.location && isNumeric(call.location.longitude) && isNumeric(call.location.latitude)) {
          this.addMarker(
            call.location.latitude,
            call.location.longitude,
            call.description,
            red_color
          )
        }
      }
      else if (call.priority && call.priority === "Medium") {
        if (call.location && isNumeric(call.location.longitude) && isNumeric(call.location.latitude)) {
          this.addMarker(
            call.location.latitude,
            call.location.longitude,
            call.description,
            yellow_color
          )
        }
      }
      else if (call.priority && call.priority === "Low") {
        if (call.location && isNumeric(call.location.longitude) && isNumeric(call.location.latitude)) {
          this.addMarker(
            call.location.latitude,
            call.location.longitude,
            call.description,
            blue_color
          )
        }
      }
      else {}
    }

    this.setMapOnAll(this.map);
  }
}
