import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ApodComponent } from './components/apod/apod.component';
import { NeoWsComponent } from './components/neo-ws/neo-ws.component';
import { DonkiComponent } from './components/donki/donki.component';
import { EarthComponent } from './components/earth/earth.component';

import { EonetComponent } from './components/eonet/eonet.component';
import { EpicComponent } from './components/epic/epic.component';
import { ExoplanetComponent } from './components/exoplanet/exoplanet.component';
import { GenelabComponent } from './components/genelab/genelab.component';
import { InsightComponent } from './components/insight/insight.component';
import { LibreryComponent } from './components/librery/librery.component';
import { MarsPhotosComponent } from './components/mars-photos/mars-photos.component';
import { SatelliteCenterComponent } from './components/satellite-center/satellite-center.component';
import { SsdComponent } from './components/ssd/ssd.component';
import { TechportComponent } from './components/techport/techport.component';
import { TechtransferComponent } from './components/techtransfer/techtransfer.component';
import { TleApiComponent } from './components/tle-api/tle-api.component';
import { VestaComponent } from './components/vesta/vesta.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-component', pathMatch: 'full' },
  { path: 'home-component', component: HomeComponent },
  { path: 'apod-component', component: ApodComponent },
  { path: 'neo-ws-component', component: NeoWsComponent },
  { path: 'donki-component', component: DonkiComponent },
  { path: 'earth-component', component: EarthComponent },

  { path: 'eonet-component', component: EonetComponent  },
  { path: 'epic-Component', component: EpicComponent },
  { path: 'exoplanet-component', component: ExoplanetComponent },
  { path: 'genelab-component', component: GenelabComponent },
  { path: 'insight-component', component: InsightComponent  },
  { path: 'librery-component', component: LibreryComponent },
  { path: 'mars-photos-component', component: MarsPhotosComponent },
  { path: 'satellite-center-component', component: SatelliteCenterComponent },
  { path: 'ssd-component', component: SsdComponent },
  { path: 'techport-component', component: TechportComponent },
  { path: 'techtransfer-component', component: TechtransferComponent },
  { path: 'tle-api-component', component: TleApiComponent },
  { path: 'vesta-component', component: VestaComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
