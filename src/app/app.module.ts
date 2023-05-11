import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import { ApodComponent } from './components/apod/apod.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NeoWsComponent } from './components/neo-ws/neo-ws.component';
import { DonkiComponent } from './components/donki/donki.component';
import { EarthComponent } from './components/earth/earth.component';
import { EonetComponent } from './components/eonet/eonet.component';
import { EpicComponent } from './components/epic/epic.component';
import { ExoplanetComponent } from './components/exoplanet/exoplanet.component';
import { GenelabComponent } from './components/genelab/genelab.component';
import { InsightComponent } from './components/insight/insight.component';
import { MarsPhotosComponent } from './components/mars-photos/mars-photos.component';
import { LibreryComponent } from './components/librery/librery.component';
import { TechtransferComponent } from './components/techtransfer/techtransfer.component';
import { SatelliteCenterComponent } from './components/satellite-center/satellite-center.component';
import { SsdComponent } from './components/ssd/ssd.component';
import { TechportComponent } from './components/techport/techport.component';
import { TleApiComponent } from './components/tle-api/tle-api.component';
import { VestaComponent } from './components/vesta/vesta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ApodComponent,
    NeoWsComponent,
    DonkiComponent,
    EarthComponent,
    EonetComponent,
    EpicComponent,
    ExoplanetComponent,
    GenelabComponent,
    InsightComponent,
    MarsPhotosComponent,
    LibreryComponent,
    TechtransferComponent,
    SatelliteCenterComponent,
    SsdComponent,
    TechportComponent,
    TleApiComponent,
    VestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
