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
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
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
import { RegistrationDialogComponent } from './shared/components/registration-dialog/registration-dialog.component';
import { AuthDialogComponent } from './shared/components/auth-dialog/auth-dialog.component';
import { CustomerComponent } from './customer/customer.component';


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
          },
          {
            path: 'customer',
            component: CustomerComponent
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
    RegistrationDialogComponent,
    AuthDialogComponent,
    CustomerComponent
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
    MatProgressBarModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    IndustriesResource,
    IndustriesService,
    AdvertisersResource,
    AdvertisersService
  ],
  entryComponents: [
    RegistrationDialogComponent,
    AuthDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
