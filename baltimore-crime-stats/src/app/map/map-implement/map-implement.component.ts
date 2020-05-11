import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

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

  coordinates = new google.maps.LatLng(this.latitude, this.longitude);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  constructor() { }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.baltimore_map.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
  }

}
