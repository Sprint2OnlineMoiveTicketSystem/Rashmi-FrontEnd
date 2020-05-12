import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTheaterComponent } from './add-theater/add-theater.component';
import { AllTheaterComponent } from './all-theater/all-theater.component';
import { UpdateTheaterComponent } from './update-theater/update-theater.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { GetTheaterComponent } from './get-theater/get-theater.component';
import { AddCityComponent } from './add-city/add-city.component';
import { AddTheaterByCityIdComponent } from './add-theater-by-city-id/add-theater-by-city-id.component';
import { SearchTheaterByCityIdComponent } from './search-theater-by-city-id/search-theater-by-city-id.component';
@NgModule({
  declarations: [
    AppComponent,
    AddTheaterComponent,
    AllTheaterComponent,
    UpdateTheaterComponent,
    GetTheaterComponent,
    AddCityComponent,
    AddTheaterByCityIdComponent,
    SearchTheaterByCityIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
