import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DatabaseService } from './../../database/database.service';
import { CrimeInfo } from './../../database/crime-info.model';

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

  ngAfterViewInit() {
    this.mapInitializer();
  }

  // do whatever with callData

  mapInitializer() {
    this.map = new google.maps.Map(this.baltimore_map.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
  }

}
