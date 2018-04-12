import { Component, ElementRef, OnInit, ViewChild, NgZone } from '@angular/core';
import { AdvertisersService } from '../shared/services/advertisers.service';
import { FormControl } from '@angular/forms';
import { LatLngBounds, MapsAPILoader } from '@agm/core';
import {} from 'googlemaps';
import { IGeoPoint } from '../shared/interfaces/geo-point.interface';
import { GoogleMap, Marker, MarkerOptions } from '@agm/core/services/google-maps-types';
import { Advertiser } from '../shared/models/advertiser.model';
import { ILocation } from '../shared/interfaces/location.interface';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public zoom: number;
  public searchControl: FormControl;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  public options: any[];
  public currentMapCenter: ILocation;
  public currentMapBounds: LatLngBounds;
  public markers: MarkerOptions[] = [];

  constructor(private zone: NgZone,
              private mapsAPI: MapsAPILoader,
              public advertisers: AdvertisersService) {
    this.currentMapCenter = {
      lat: 0,
      lng: 0
    };
    this.zoom = 4;
    this.searchControl = new FormControl();
    this.options = [
      'test option #1',
      'test option #2',
      'test option #3',
      'test option #4',
      'test option #5'
    ];
  }

  ngOnInit() {
    this.setCurrentPosition();
  }


  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentMapCenter.lat = position.coords.latitude;
        this.currentMapCenter.lng = position.coords.longitude;
        this.zoom = 8;
      });
    }
  }


  onSearch(query: string) {
    if (query.length > 0) {
      this.advertisers.search(query, true);
    }
  }


  onSelectLookupOption(event: any) {
    console.log(event.option.value);
    this.advertisers.add(event.option.value);
    this.advertisers.select(event.option.value);
    this.currentMapCenter.lat = event.option.value.company.place.geometry.location.lat;
    this.currentMapCenter.lng = event.option.value.company.place.geometry.location.lng;
    this.zoom = 18;
  }


  onMapCenterChange(location: ILocation) {
    this.currentMapCenter = location;
  }


  onMapIdle() {
    this.advertisers.fetchByLocation(this.currentMapCenter, 5000, true);
  }


  onMapReady(map: any) {}


  onBoundsChange(bounds: LatLngBounds) {
    this.advertisers.clear();
    this.currentMapBounds = bounds;
  }


  clearFilters() {
    this.advertisers.clear();
    this.advertisers.fetchByLocation(this.currentMapCenter, 5000, true);
  }
}
