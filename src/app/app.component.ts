import { Component } from '@angular/core';
import { AdvertisersService } from './shared/services/advertisers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(advertisers: AdvertisersService) {}
}
