import { Component, ElementRef, OnInit, ViewChild, NgZone } from '@angular/core';
import { AdvertisersService } from '../shared/services/advertisers.service';
import { FormControl } from '@angular/forms';
import { LatLngBounds, MapsAPILoader } from '@agm/core';
import {} from 'googlemaps';
import { GoogleMap, Marker, MarkerOptions } from '@agm/core/services/google-maps-types';
import { Advertiser } from '../shared/models/advertiser.model';
import { ILocation } from '../shared/interfaces/location.interface';
import { IViewport } from '../shared/interfaces/viewport.interface';

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
  public currentViewport: IViewport;
  public markers: MarkerOptions[] = [];
  private placesInterval;
  private isPlacesPending: boolean;

  constructor(private zone: NgZone,
              private mapsAPI: MapsAPILoader,
              public advertisers: AdvertisersService) {
    this.currentMapCenter = {
      lat: 0,
      lng: 0
    };
    this.currentViewport = {
      northeast: {lat: 0, lng: 0},
      southwest: {lat: 0, lng: 0}
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


  async onSearch(query: string): Promise<void> {
    if (query.length > 0) {
      if (this.placesInterval) {
        this.placesInterval = clearTimeout(this.placesInterval);
      }

      this.placesInterval = await setTimeout( async () => {
        if (this.isPlacesPending) {
          return;
        }
        this.isPlacesPending = true;
        this.options = await this.advertisers.search(query, true);
        this.isPlacesPending = false;
      }, 500);
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


  /**
   * Fires when map is idle
   */
  onMapIdle() {
    this.advertisers.fetchByViewport(this.currentViewport, true);
  }


  onMapReady(map: any) {}


  /**
   * Fires when map bounds change
   * @param {LatLngBounds} bounds
   */
  onBoundsChange(bounds: LatLngBounds) {
    const northEast = bounds.getNorthEast();
    const southWest = bounds.getSouthWest();
    this.currentViewport.northeast.lat = northEast.lat();
    this.currentViewport.northeast.lng = northEast.lng();
    this.currentViewport.southwest.lat = southWest.lat();
    this.currentViewport.southwest.lng = southWest.lng();
  }

  /**
   * Apply industry filters
   */
  applyFilters() {
    this.advertisers.clear();
    this.advertisers.fetchByFilter(this.currentViewport, true);
  }

  /**
   * Clear industry filters
   */
  clearFilters() {
    this.advertisers.clear();
    this.advertisers.fetchByViewport(this.currentViewport, true);
  }
}
