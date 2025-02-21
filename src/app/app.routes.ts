import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { MacrodatarefinementComponent } from './views/macrodatarefinement/macrodatarefinement.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mdr', component: MacrodatarefinementComponent },
];
