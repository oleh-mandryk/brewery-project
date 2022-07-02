import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import {  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { BrewerydetailComponent } from './brewerydetail/brewerydetail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BreweriesComponent,
    BrewerydetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDz4JZKURuzUK2qLrItKdR5e8wupT0_GoY'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
