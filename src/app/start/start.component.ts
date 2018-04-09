import { Component, ElementRef, OnInit, ViewChild, NgZone } from '@angular/core';
import { AdvertisersService } from '../shared/services/advertisers.service';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import {} from 'googlemaps';
import {IGeoPoint} from "../shared/interfaces/geo-point.interface";

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

    /*
    this.mapsAPI.load().then(() => {
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
    });
    */
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


  onMapCenterChange(position: IGeoPoint) {
    this.currentMapCenter = position;
  }


  onMapIdle() {
    console.log('map idle');
    console.log(this.currentMapCenter);
    this.advertisers.fetchByGeoPoint(this.currentMapCenter, true);
  }
}
