import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ResourceModule } from '@ngx-resource/handler-ngx-http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { AppComponent } from './app.component';
import { IndustryFilterComponent } from './industries/industry-filter/industry-filter.component';
import { IndustryFilterItemComponent } from './industries/industry-filter/industry-filter-item/industry-filter-item.component';
import { IndustriesResource } from './shared/resources/industries-resource.service';


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    IndustryFilterComponent,
    IndustryFilterItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ResourceModule.forRoot(),
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ],
  providers: [
    IndustriesResource
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
