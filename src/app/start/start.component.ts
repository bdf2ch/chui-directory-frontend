import { Component, ElementRef, OnInit, ViewChild, NgZone } from '@angular/core';
import { AdvertisersService } from '../shared/services/advertisers.service';
import { FormControl } from '@angular/forms';
import { LatLngBounds, MapsAPILoader } from '@agm/core';
import {} from 'googlemaps';
import { IGeoPoint } from '../shared/interfaces/geo-point.interface';
import { GoogleMap, Marker, MarkerOptions } from '@agm/core/services/google-maps-types';
import { Advertiser } from '../shared/models/advertiser.model';

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
  public currentMapCenter: IGeoPoint;
  public currentMapBounds: LatLngBounds;
  public markers: MarkerOptions[] = [];

  constructor(private zone: NgZone,
              private mapsAPI: MapsAPILoader,
              public advertisers: AdvertisersService) {
    this.currentMapCenter = {
      latitude: 0,
      longitude: 0
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
    this.mapsAPI.load().then(() => {
      /**
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.zone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    **/
    });
  }


  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentMapCenter.latitude = position.coords.latitude;
        this.currentMapCenter.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }


  onSearch(query: string) {
    if (query.length > 0) {
      this.advertisers.search(query);
    }
  }


  onMapCenterChange(position: IGeoPoint) {
    this.currentMapCenter = position;
  }


  onMapIdle() {
    this.advertisers.fetchByGeoPoint(this.currentMapCenter, true);
    const northEast = this.currentMapBounds.getNorthEast();
    const southWest = this.currentMapBounds.getSouthWest();
    this.markers = [];
    this.advertisers.clear();

    for (let i = 0; i < 9; i++) {
      const marker: MarkerOptions = {
        position: {
          lat: Math.random() * (southWest.lat() - northEast.lat()) + northEast.lat(),
          lng: Math.random() * (southWest.lng() - northEast.lng()) + northEast.lng(),
        },
        draggable: false,
        clickable: false,
        title: 'test marker',
        label: i.toString()
      };
      this.markers.push(marker);

      const adv = new Advertiser();
      adv.title = i.toString();
      adv.address = `${marker.position.lat} , ${marker.position.lng}`;
      this.advertisers.add(adv);
    }
  }


  onMapReady(map: any) {}


  onBoundsChange(bounds: LatLngBounds) {
    this.currentMapBounds = bounds;
  }

}
