import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ResourceModule } from '@ngx-resource/handler-ngx-http';
import { AgmCoreModule } from '@agm/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { IndustryFilterComponent } from './start/industry-filter/industry-filter.component';
import { IndustriesResource } from './shared/resources/industries-resource.service';
import { IndustriesService } from './shared/services/industries.service';
import { AdvertisersListComponent } from './start/advertisers-list/advertisers-list.component';
import { AdvertiserComponent } from './start/advertiser/advertiser.component';
import { AdvertisersResource } from './shared/resources/advertisers-resource.service';
import { AdvertisersService } from './shared/services/advertisers.service';
import { StartComponent } from './start/start.component';
import { DirectoryComponent } from './directory/directory.component';
import { environment } from '../environments/environment';
import { RegistartionDialogComponent } from './shared/components/registartion-dialog/registartion-dialog.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: DirectoryComponent,
        children: [
          {
            path: '',
            component: StartComponent
          }
        ]
      }
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    IndustryFilterComponent,
    AdvertisersListComponent,
    AdvertiserComponent,
    StartComponent,
    DirectoryComponent,
    RegistartionDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ResourceModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsAPIKey,
    }),
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [
    IndustriesResource,
    IndustriesService,
    AdvertisersResource,
    AdvertisersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
