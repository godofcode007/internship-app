import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArtistComponent } from './dashboard/artist/artist.component';
import { BandComponent } from './dashboard/band/band.component';
import { ConcertComponent } from './dashboard/concert/concert.component';
import { ConcertBandComponent } from './dashboard/concert-band/concert-band.component';
import { InstrumentComponent } from './dashboard/instrument/instrument.component';
import { RoleComponent } from './dashboard/role/role.component';
import { RoleinstrumentComponent } from './dashboard/roleinstrument/roleinstrument.component';
import { VenueComponent } from './dashboard/venue/venue.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'artist', component: ArtistComponent },
];
